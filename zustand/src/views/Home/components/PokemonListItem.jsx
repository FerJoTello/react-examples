import { Link } from "react-router-dom"

const PokemonListItem = ({ name, url }) => {

    const id = url.split("/")[6]

    return (
        <>
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${id}`}>Ver detalle</Link>
            </button>
        </>
    )
}

export default PokemonListItem