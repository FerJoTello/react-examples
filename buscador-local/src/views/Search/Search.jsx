import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import "./Search.css"

import SearchResults from "./components/SearchResults/SearchResults";

const Search = () => {

    const [IsAtTop, setIsAtTop] = useState(false)
    const [UserData, setUserData] = useState([])
    const [Results, setResults] = useState([])


    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users").catch((error) => console.error("Error al hacer obtener la información ->", error))
            if (!response || response.status != 200) {
                setUserData([])
                return
            }
            const json = await response.json().catch(null)
            setUserData(json)
        }
        getData()
    }, [])


    const handleSearchClick = (searchText) => {
        setIsAtTop(true)
        if (UserData?.length) {
            const searchTextMinus = searchText.toLowerCase()

            const filteredData = UserData.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.phone.toLowerCase().includes(searchTextMinus)
                )
            })
            setResults(filteredData)
        }
    }

    const handleCloseClick = () => {
        setIsAtTop(false)
        setResults([])
    }

    return (
        <div className={`search ${IsAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} isSearching={IsAtTop} onClose={handleCloseClick}></SearchBox>
            <SearchResults resultsList={Results} isSearching={IsAtTop} />
        </div>
    )
}

export default Search