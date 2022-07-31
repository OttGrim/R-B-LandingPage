import * as S from './styles'
import { Link } from 'react-router-dom'

const Menu = () => {
    return <S.MenuList>
        <S.ItemList>
            <Link to="/home">Home</Link>
        </S.ItemList>
        <S.ItemList>
            <Link to="/">About us</Link>
        </S.ItemList>
        <S.ItemList>
            <Link to='/'>Invite</Link>
        </S.ItemList>
        <S.ItemList>
            <Link to="/">Comunity</Link>
        </S.ItemList>
    </S.MenuList>
}

export default Menu