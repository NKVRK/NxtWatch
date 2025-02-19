import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    ${props =>
      props.subcon
        ? `
        flex-direction:column;
        width:80vw;

         @media screen and (max-width:991px){
    width:100%;
  }
        
    `
        : `
    width:100vw;

    @media screen and (max-width:991px){
          flex-direction:column;
        }
    `}
`
