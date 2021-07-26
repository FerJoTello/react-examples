import axios from "axios";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import "./style.css"

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [userData, setUserData] = useState([]);
    const [results, setResults] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                /*
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                */
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
        };
        getUsers();
    }, []);


    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([])
    };


    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if (userData?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = userData.filter((value) => (
                value.name.toLocaleLowerCase().includes(searchTextMinus) ||
                value.phone.toLocaleLowerCase().includes(searchTextMinus) ||
                value.email.toLocaleLowerCase().includes(searchTextMinus) ||
                value.username.toLocaleLowerCase().includes(searchTextMinus)
            ));
            setResults(filteredData);
        }
    };
    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    );
}