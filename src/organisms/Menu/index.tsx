import * as S from './styles'
import { Link } from 'react-router-dom'

const Menu = () => {
    return <S.MenuList>
        <S.ItemList>
            <Link to="/home">Home</Link>
        </S.ItemList>
        <S.ItemList>
            <Link to="/aboutus">About us</Link>
        </S.ItemList>
        <S.ItemList>
            <a href="https://google.com" target="_blank" rel="noreferrer noopener">Invite</a>
        </S.ItemList>
        <S.ItemList>
            <a href="https://google.com" target="_blank" rel="noreferrer noopener">Comunity</a>
        </S.ItemList>
    </S.MenuList>
}

export default Menu