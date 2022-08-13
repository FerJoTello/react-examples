import PokemonList from "./components/PokemonList"

import { usePokemonState, usePokemonApi } from "../../context/Pokemon/PokemonContext"
import { useEffect } from "react"
import { useState } from "react"


const Home = () => {
    const Pokemons = usePokemonState()
    const [ErrorGetPokemons, setErrorGetPokemons] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
    const { getPokemons } = usePokemonApi()


    useEffect(() => {
        const initPokemons = async () => {
            if (Pokemons.length > 0) {
                return
            }
            await getPokemons().catch((err) => {
                setErrorGetPokemons(true)
                setIsLoading(false)
            })
        }
        initPokemons()
        setIsLoading(false)
    }, [])

    return (
        <div>
            <h2>Home view</h2>
            {IsLoading ? <p>Cargando listado de pokemons...</p> : (
                ErrorGetPokemons ? (<p>No se pudo obtener el listado de los pokemon :c</p>) :
                    <PokemonList pokemons={Pokemons} />
            )}
        </div>
    )
}

export default Home