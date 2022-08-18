import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import usePokemonDetailStore from "../../stores/PokemonDetail"



const PokeDetail = () => {
    const { id } = useParams()
    const { PokemonDetail, IsLoading, getPokemonDetail } = usePokemonDetailStore(state => ({
        PokemonDetail: state.PokemonDetail,
        IsLoading: state.IsLoading,
        getPokemonDetail: state.getPokemonDetail
    }))
    const [ErrorGetDetail, setErrorGetDetail] = useState(false)

    useEffect(() => {
        const initComponent = async () => {
            if (Number.parseInt(id, 10) === PokemonDetail.id) {
                return
            }
            const error = await getPokemonDetail(id)
            if (error) {
                setErrorGetDetail(true)
            }
        }
        initComponent()
    }, [])
    return (
        IsLoading ? (<p>Cargando info del pokemon...</p>) :
            ErrorGetDetail ? (<p>Hubo un problema para obtener la info del pokemon :c</p>) :
                <div>
                    <div>{`#${PokemonDetail?.id} - ${PokemonDetail?.name}`}</div>
                    <img src={PokemonDetail?.sprites?.front_default} alt="imagen" />
                </div>
    )
}

export default PokeDetail