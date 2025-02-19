import styled from 'styled-components'

export const SidebarContainer = styled.div`
  height:90vh;
  width:20vw;
  background-color:${props => (props.darkTheme ? '#313131' : '')};
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  @media screen and (max-width:991px){
    display:${props => (props.showMenu ? 'flex' : 'none')};
    height:25vh !important;
    width:100vw !important;
  }
`
