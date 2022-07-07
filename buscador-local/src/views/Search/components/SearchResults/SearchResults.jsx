import "./SearchResults.css"
import SearchResultsItem from "./SearchResultsItem/SearchResultsItem";

/**
 * Componente que muestra un listado de los resultados obtenidos en la búsqueda.
 * @param {Object} props 
 * @param {Array} props.resultsList Arreglo de los resultados que sí cumplen con el criterio de búsqueda.
 * @param {boolean} props.isSearching Indica si se presionó el botón de búsqueda.
 * @returns 
 */
const SearchResults = ({ resultsList, isSearching }) => {
    return (
        <div className="search-results-list">
            {!resultsList.length && isSearching && <p>No existen resultados :c</p>}
            {resultsList?.map((value) => {
                return (
                    //Paso de props al componente hijo por medio de destructuración del objeto value
                    <SearchResultsItem key={value.id} {...value}></SearchResultsItem>
                )
            })}
        </div>
    )
}

export default SearchResults