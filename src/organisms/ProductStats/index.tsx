import * as S from './styled'
import D20Card from '../../molecules/D20Card'
import ImageDeD from '../../assets/imageDeD.jpg'

const ProductStats = () => {
    return (
        <S.Container>
            <D20Card />

            <img src={ImageDeD} alt="Uma ilustração de Dungeon and Dragons" />
        </S.Container>
    )
}

export default ProductStats