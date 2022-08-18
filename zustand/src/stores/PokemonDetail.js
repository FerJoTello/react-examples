import create from "zustand"
import apiCall from "../tools/api"


const usePokemonDetailStore = create((set, get) => ({
    PokemonDetail: {},
    IsLoading: false,
    /**
     * Hace una petición a la pokeapi y almacena el resultado de la petición en el state PokemonDetail
     * @param {number} id identificador único del pokemon
     */
    getPokemonDetail: async (id) => {
        try {
            set({ IsLoading: true })
            const apiResult = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` }).catch((err) => { return { error: err } })
            if (apiResult.error) {
                throw apiResult.error
            }
            set({ PokemonDetail: apiResult, IsLoading: false })
        } catch (error) {
            set({ PokemonDetail: {}, IsLoading: false })
            return {
                message: "Hubo un problema al obtener la respuesta de la api",
                error: error
            }
        }
    }
}))

export default usePokemonDetailStore