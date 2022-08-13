import { useMemo } from "react";
import { useState, createContext, useContext } from "react";

import apiCall from "../../tools/api";


/**
 * Context del state 'Pokemons'.
 */
const PokemonStateContext = createContext(null)
/**
 * Context de las funciones relacionados al state 'Pokemons'.
 */
const PokemonApiContext = createContext(null)

/**
 * Provider del state context Pokemon, para almacenarlos en el contexto
 * y que puedan ser accedidos desde el componente hijo que lo requiera.
 * @param {*} param0 
 * @returns el componente PokemonProvider
 */
export const PokemonProvider = ({ children }) => {
    const [Pokemons, setPokemons] = useState([])

    /**
     * Hace una petición a la pokeapi y almacena el resultado de la petición en el state Pokemons
     */
    const getPokemons = async () => {
        const apiResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" }).catch((err) => console.error(err))
        if (!apiResult) {
            setPokemons([])
            return Promise.reject(new Error("Hubo un problema al obtener la respuesta de la api"))
        }
        setPokemons(apiResult.results)
    }

    /**
     * Api con los métodos para modificar el valor del state.
     */
    const api = useMemo(
        () => ({
            getPokemons: getPokemons
        }),
        [setPokemons]
    )

    return (
        <PokemonStateContext.Provider value={Pokemons}>
            <PokemonApiContext.Provider value={api}>
                {children}
            </PokemonApiContext.Provider>
        </PokemonStateContext.Provider>
    )
}


/**
 * Custom hook for the state
 * @returns state Pokemons
 */
export const usePokemonState = () => {
    const ctx = useContext(PokemonStateContext)

    if (!ctx) {
        throw new Error("usePokemonApi tiene qué ser utilizado dentro del PokemonProvider")
    }
    return ctx
}


/**
 * Custom hook for the Api
 * @returns Api para modificar las propiedades del state 'Pokemons'
 */
export const usePokemonApi = () => {
    const ctx = useContext(PokemonApiContext)

    if (!ctx) {
        throw new Error("usePokemonApi tiene qué ser utilizado dentro del PokemonProvider")
    }
    return ctx
}
