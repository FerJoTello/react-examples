import PokemonContext from "./index";

import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getPokemons = async () => {
        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");
            const pokemonResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" });
            setPokemons(pokemonResult.results);
        } catch (error) {
            setPokemons([]);
            setHasError(true);
            setErrorMessage("Error. Algo ha pasado");
        } finally {
            setIsLoading(false);
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) Promise.reject("Id es requerido");

        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");
            const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            console.log(error);
            setPokemonDetail({});
            setHasError(true);
            setErrorMessage("Error. Algo ha pasado");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        //value es una propiedad del componente Provider
        <PokemonContext.Provider
            value={{
                getPokemons,
                pokemons,
                getPokemonDetail,
                pokemonDetail,
                isLoading,
                errorMessage,
                hasError,
            }}>
            {children}
        </PokemonContext.Provider>
    );
}