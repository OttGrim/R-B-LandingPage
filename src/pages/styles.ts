import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;


    > div{
        width: 50%;
    }

    h1{
        color: #5c5c5e;
        font-size 52px;
        font-weight: bold;
        margin-top: 100px;
    }

    h6{
        font-size: 16px;
        color: #8f8e91;
        font-weight: normal;
        margin-top: 15px;
    }
`

export const ColumnImage = styled.div`
    text-align: right;
    position: relative;

    img{
        border-radius: 15%;
        margin-left: 108px;
    }
`