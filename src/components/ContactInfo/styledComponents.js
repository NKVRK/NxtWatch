import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:30%;
    padding:0px 15px;

    @media screen and (max-width:991px){
        display:none;
    }
`
export const Heading = styled.p`
    font-size:15px;
    color:${props => (props.darkTheme ? '#f1f5f9' : '#0f0f0f')};
`
export const Para = styled.p`
    font-size:15px;
    color:${props => (props.darkTheme ? '#cccccc' : ' #181818')};
`
export const Image = styled.img`
height:20px;
margin-right:10px;`

export const List = styled.ul`
list-style:none;
padding:0px;
margin:0px;
display:flex;
align-items:center;
`
export const ListItem = styled.li``
