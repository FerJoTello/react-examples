import { useMemo } from "react";
import { useState, createContext, useContext } from "react";

import apiCall from "../../tools/api";


/**
 * Context para el state 'PokemonDetail'.
 */
const PokemonDetailStateContext = createContext(null)
/**
 * Context de las funciones relacionados al state 'PokemonDetail'.
 */
const PokemonDetailApiContext = createContext(null)

/**
 * Provider del state context Pokemon, para almacenarlos en el contexto
 * y que puedan ser accedidos desde el componente hijo que lo requiera.
 * @param {*} param0 
 * @returns el componente PokemonProvider
 */
export const PokemonDetailProvider = ({ children }) => {
    const [PokemonDetail, setPokemonDetail] = useState({})

    /**
     * Hace una petición a la pokeapi y almacena el resultado de la petición en el state PokemonDetail
     * @param {number} id identificador único del pokemon
     */
    const getPokemonDetail = async (id) => {
        const apiResult = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` }).catch((err) => console.error(err))
        if (!apiResult) {
            setPokemonDetail({})
            return Promise.reject("No se pudo obtener la información del pokemon con el id proporcionado")
        }
        setPokemonDetail(apiResult)
    }

    /**
     * Api con los métodos para modificar el valor del state.
     */
    const api = useMemo(
        () => ({
            getPokemonDetail: getPokemonDetail
        }),
        [setPokemonDetail]
    )

    return (
        <PokemonDetailStateContext.Provider value={PokemonDetail}>
            <PokemonDetailApiContext.Provider value={api}>
                {children}
            </PokemonDetailApiContext.Provider>
        </PokemonDetailStateContext.Provider>

    )
}


/**
 * Custom hook for the state
 * @returns state PokemonDetail
 */
export const usePokemonDetailStateContext = () => {
    const ctx = useContext(PokemonDetailStateContext)

    if (!ctx) {
        throw new Error("usePokemonApi tiene qué ser utilizado dentro del PokemonProvider")
    }
    return ctx
}


/**
 * Custom hook for the Api
 * @returns Api para modificar las propiedades del state 'PokemonDetail'
 */
export const usePokemonDetailApiContext = () => {
    const ctx = useContext(PokemonDetailApiContext)

    if (!ctx) {
        throw new Error("usePokemonApi tiene qué ser utilizado dentro del PokemonProvider")
    }
    return ctx
}
