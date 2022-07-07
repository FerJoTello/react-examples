import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import "./Search.css"

import data from "../../data/users.json"
import SearchResults from "./components/SearchResults/SearchResults";

const Search = () => {

    const [IsAtTop, setIsAtTop] = useState(false)
    const [UserData, setUserData] = useState(data)
    const [Results, setResults] = useState([])


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
            <SearchResults resultsList={Results} isSearching={IsAtTop}/>
        </div>
    )
}

export default Search