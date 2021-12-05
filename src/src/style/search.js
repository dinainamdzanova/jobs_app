import styled from "styled-components";
const Div = styled.div`
    width: 790px;
    height: 55px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    padding-left: 10px;
    &::placeholder {
        color: #B9BDCF;
        font-family: 'Roboto', sans-serif;
    }
`

const Button = styled.button`
    width: 146px;
    height: 47px;
    background: #1E86FF;
    border-radius: 4px;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`

export {  Input, Button, Div }