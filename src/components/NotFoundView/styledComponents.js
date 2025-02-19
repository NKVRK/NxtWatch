import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:80vw;
    height:90vh;
    background-color:${props => (props.darkTheme ? '#000000' : '')};
`

export const Heading = styled.h1`
    color:${props => (props.darkTheme ? '#ffffff' : '#000000')};
    font-size:25px;
`
export const Para = styled.p`
    color:grey;
    font-size:15px;
`
export const Image = styled.img`
    height:60%;
`
