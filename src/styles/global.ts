import { createGlobalStyle } from 'styled-components'
import Rpgbk from '../assets/rpgbackground.jpg'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body{
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }
    
    button{
        font-family: 'Poppins', sans-serif;
        background-color: #F8FDFF;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        outline: none;
    }
`

export default globalStyle;