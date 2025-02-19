import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    ${props =>
      props.column
        ? `
        flex-direction:column;
        width:80%;
        min-height:90vh;

        @media screen and (max-width:991px){
          width:100%;
        }
    `
        : `
    width:100%;
    @media screen and (max-width:991px){
          flex-direction:column;
        }

    `}
`
export const VideosList = styled.ul`
    list-style:none;
    margin:0px;
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    overflow-y:scroll;
    min-height:80vh;
    max-height:80vh;
    width:100%;
    background-color:${props => (props.darkTheme ? '#000000' : ' #e2e8f0')};
`
