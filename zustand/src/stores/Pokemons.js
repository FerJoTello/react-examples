import create from "zustand"
import apiCall from "../tools/api"


const usePokemonsStore = create((set, get) => ({
    Pokemons: [],
    IsLoading: false,
    /**
     * Hace una petición a la pokeapi y almacena el resultado de la petición en el state Pokemons
     */
    getPokemons: async () => {
        try {
            set({ IsLoading: true })
            const apiResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" })
            set({ Pokemons: apiResult.results, IsLoading: false })
        } catch (error) {
            set({ pokemons: [], IsLoading: false })
            return {
                message: "Hubo un problema al obtener la respuesta de la api",
                error: error
            }
        }
    }
}))

export default usePokemonsStore