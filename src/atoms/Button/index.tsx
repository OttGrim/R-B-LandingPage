import * as S from './styles'
import { Link } from 'react-router-dom'

const Button = () => {
    return <Link to="/sheet">
        <S.Container>Character Sheet</S.Container>
    </Link>
}

export default Button