import PokemonListItem from "./PokemonListItem"

/**
 * 
 * @param {Object} props
 * @param {Array} props.pokemons
 * @returns 
 */
const PokemonList = ({ pokemons }) => {
    return (
        <div>
            {pokemons?.map((pokemon, index) => (
                <PokemonListItem key={index} {...pokemon} />
            ))}
        </div>
    )
}

export default PokemonList