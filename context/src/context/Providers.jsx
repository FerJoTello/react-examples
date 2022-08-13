import { PokemonProvider } from "./Pokemon/PokemonContext"
import { PokemonDetailProvider } from "./PokemonDetail/PokemonDetailContext"



/**
 * Componente que contiene a todos los Context.Provider utilizados en la aplicación de forma global con el objetivo de que persistan durante el cambio de rutas
 */
const Providers = ({ children }) => {
    return (
        <>
            <PokemonProvider>
                <PokemonDetailProvider>
                    {children}
                </PokemonDetailProvider>
            </PokemonProvider>
        </>
    )
}

export default Providers