import PokemonContext from "../../context/pokemons";

import { useContext } from "react";
export default function FourOFour() {
    const { pokemons } = useContext(PokemonContext);
    console.log(pokemons);
    return (
        <div>
            <p>La ruta que buscas no existe.</p>
        </div>
    );
}