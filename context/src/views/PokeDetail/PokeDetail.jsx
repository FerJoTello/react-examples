import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usePokemonDetailStateContext, usePokemonDetailApiContext } from "../../context/PokemonDetail/PokemonDetailContext"



const PokeDetail = () => {
    const [IsLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    const { getPokemonDetail } = usePokemonDetailApiContext()
    const PokemonDetail = usePokemonDetailStateContext()

    useEffect(() => {
        const initComponent = async () => {
            if (Number.parseInt(id,10) !== PokemonDetail.id) {
                await getPokemonDetail(id).catch((err) => console.error(err))
            }
            setIsLoading(false)
        }
        initComponent()
    }, [])
    return (
        IsLoading ? (<p>Cargando info del pokemon...</p>) :
            <div>
                <div>{`#${PokemonDetail?.id} - ${PokemonDetail?.name}`}</div>
                <img src={PokemonDetail?.sprites?.front_default} alt="imagen" />
            </div>
    )
}

export default PokeDetail