import shallow from "zustand/shallow"

import PokemonList from "./components/PokemonList"

import { useEffect } from "react"
import { useState } from "react"

import usePokemonsStore from "../../stores/Pokemons"


const Home = () => {
    //shallow evita renderizados extra al únicamente renderizar cuando uno de los props del state se actualiza.
    const { Pokemons, IsLoading, } = usePokemonsStore(state => ({
        Pokemons: state.Pokemons,
        IsLoading: state.IsLoading,
    }), shallow)
    const { getPokemons } = usePokemonsStore.getState()
    const [ErrorGetPokemons, setErrorGetPokemons] = useState(false)


    useEffect(() => {
        const initPokemons = async () => {
            if (Pokemons.length > 0) {
                return
            }
            const error = await getPokemons()
            if (error) {
                setErrorGetPokemons(true)
                console.error(error.error)
            }
        }
        initPokemons()
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