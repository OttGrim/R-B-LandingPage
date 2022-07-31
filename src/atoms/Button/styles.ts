import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #474747;
    margin-left: 30px;
    margin-top: 20px;
    color: #474747;
    font-size 14px;
    border-radius: 10px;
    box-shadow: 0px 0px 17px -8px trasparent;
    transition: all 0.25s ease-out;

    &:hover{
        color: #FFF;
        background-color: #474747;
        box-shadow: 0px 0px 17px -5px #474747;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #474747;

    &:hover{
        color: #fff;
        
    }
`