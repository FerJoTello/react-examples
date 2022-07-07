import { useState } from "react";

import "./SearchBox.css"


/**
 * Componente para ingresar un texto y realizar una búsqueda
 * @param {Object} props
 * @param {void} props.onSearch Método a ejecutar cuando se presione el botón "Buscar"
 * @param {void} props.onClose Método a ejecutar cuando se presione el botón "Cerrar"
 * @param {boolean} props.isSearching Indica si se presionó el botón de búsqueda.
 */
const SearchBox = ({ onSearch, onClose, isSearching }) => {

    const [SearchText, setSearchText] = useState("")

    const handleClickClose = () => {
        setSearchText("")
        onClose()
    }


    return (
        <div className="search-box">
            <h2 className="search-box-title">Buscador de personal 2.0</h2>
            <div className="search-box-buttons">
                <label>
                    <input className="search-box-input" value={SearchText} onChange={({ target: { value } }) => { setSearchText(value) }} />
                </label>
                {/* El componente hijo llama a los métodos del padre */}
                <button onClick={() => { onSearch(SearchText) }} disabled={!SearchText.length}>Buscar</button>
                {isSearching && <button onClick={handleClickClose}>Cerrar</button>}
            </div>

        </div>
    )
}

export default SearchBox