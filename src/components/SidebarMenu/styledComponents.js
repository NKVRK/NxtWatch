import styled from 'styled-components'

export const MenuList = styled.ul`
    list-style:none;
    padding:0px;
    display:flex;
    flex-direction:column;
    width:100%;
    height:30%;
    margin:0px;

    @media screen and (max-width:991px){
      width:100vw;
      height:30%;
    }
`
export const ListItem = styled.li`
 @media screen and (max-width:991px){
      width:100%;
    }
`
export const MenuButton = styled.button`
padding-left:15px;
    display:flex;
    align-items:center;
    border:none;
    outline:none;
    background-color:${props => {
      switch (true) {
        case props.darkTheme:
          return props.activeTab ? '#424242' : 'transparent'
        default:
          return props.activeTab ? '#cbd5e1' : 'transparent'
      }
    }};    
    width:100%;
`
export const Text = styled.p`
    color:${props => {
      switch (true) {
        case props.darkTheme:
          return props.activeTab ? '#ffffff' : ' #ebebeb'
        default:
          return props.activeTab ? '#181818' : ' #424242'
      }
    }};    
    margin-left:15px;  
    font-weight:${props => (props.activeTab ? 'bold' : '')};
`
