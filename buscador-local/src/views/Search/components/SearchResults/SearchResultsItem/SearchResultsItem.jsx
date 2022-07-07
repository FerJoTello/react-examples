import "./SearchResultsItem.css"

const SearchResultsItem = ({ name, email }) => {

    return (
        <div className="search-results-item">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}

export default SearchResultsItem