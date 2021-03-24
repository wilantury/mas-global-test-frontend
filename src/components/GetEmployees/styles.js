import styled from 'styled-components'

export const Container = styled.div`
    padding: 5px 5px;
    margin-bottom: 15px;
    text-align: center;
`
export const Button = styled.button`
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 20px
    background-color: transparent;
    outline: none;
    &:hover {
        background-color:#F9F9F8;
        cursor: pointer;
    }

    &:active{
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`
export const Input = styled.input`
    height: 30px;
    border: none;
    border-bottom: solid 2px gray;
    font-size: 15px;
    width: 130px;
    text-align: center;
    outline:none;
    &:focus{
        border-bottom: solid 2px lightblue;
    }
`