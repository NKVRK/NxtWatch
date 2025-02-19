import styled from 'styled-components'

export const Container = styled.div`
    max-height:80vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow-y:auto;
`
export const Image = styled.img`
    height:40%;
`
export const Heading = styled.h1`
    color:${props => (props.darkTheme ? '#ffffff' : '#000000')};
    font-size:20px;
`
export const Para = styled.p`
    color:grey;
    font-size:15px;

`
export const Button = styled.button`
    border:none;
    outline:none;
    border-radius:4px;
    background-color: #4f46e5;
    font-size:10px;
    padding:10px;
    color:#ffffff;
`
