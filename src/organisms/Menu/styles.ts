import styled from "styled-components";

export const MenuList = styled.ul`
    margin-left: auto;
`

export const ItemList = styled.li`
    display: inline-block;
    margin-right: 15px;
    margin-top: 30px;
    margin-left: 30px;
    font-weight: 700;
    
    &:hover{
        a{
            color: #418c85;
            transition: color 0.25s ease;
        }
    }

    a{
    color: #4f4e4d;
    }
`