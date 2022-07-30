import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Poppins', sans-serif;
    }

    background-color: #F8FDFF;

    button{
        font-family: 'Poppins', sans-serif;
        background-color: trasparent;
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