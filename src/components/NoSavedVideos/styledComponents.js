import styled from 'styled-components'

export const Container = styled.div`
    max-height:90vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:991px){
        height:90vh;
        width:100%;
    }
`
export const Heading = styled.h1`
    color:${props => (props.darkTheme ? '#ffffff' : '#000000')};
    font-size:20px;
`
export const Para = styled.p`
    font-size:15px;
    color:grey;
`
export const Image = styled.img`
    width:50%;
`
