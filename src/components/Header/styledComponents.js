import styled from 'styled-components'

export const Nav = styled.nav`
    height: ${props => (props.subCon ? '100%' : '10vh')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => (props.subCon ? '' : '15px 40px')};
    background-color: ${props =>
      props.darkTheme
        ? `${props.subCon ? 'transparent' : '#313131'}`
        : `${props.subCon ? 'transparent' : '#f8fafc'}`};

   @media screen and (max-width:991px ){
    display:${props => (props.subCon ? 'none' : 'flex')};
    padding:0px 20px;
   }    
`
export const MobileContainer = styled.div`
  display:flex;
  align-items:center;
  width:30%;
  justify-content:space-between;

  @media screen and (min-width:992px ){
    display:none;
   } 
`

export const NavImg = styled.img`
    height: 80%;
    margin: ${props => (props.profile ? '0px 20px' : '')};

    @media screen and (max-width:991px ){
    height:30px;
   } 
`
export const NavButton = styled.button`
    display:flex;
      justify-content:center;
      align-items:center;
    font-size:10px;
    padding: ${props => (props.logout ? '5px' : '0px')};
    text-align:center;
    border-radius:3px;
    border:${props => {
      switch (true) {
        case props.logoBtn:
          return '0px'
        case props.darkTheme:
          return '2px solid #ffffff'
        default:
          return '2px solid #3b82f6'
      }
    }};    
    color:${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
    background-color:transparent;
    height:100%;

     @media screen and (max-width:991px){
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      border:none;
      outline:none;
      color:#000000;
  }
`
export const PopupContainer = styled.div`
  background-color:${props => (props.bgcon ? '#383838' : 'transparent')};
  border:0px;
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
  width:500px;
  height:150px;
  ${props =>
    props.bgcon
      ? `
    flex-direction:column;
    justify-content:center;
    padding:10px 25px;
  `
      : `
  `}
  @media screen and (max-width:991px){
    width:300px;
    height:100px;
  }
`
export const PopupPara = styled.p`
  color:#ffffff;
  font-size:25px;
  @media screen and (max-width:991px){
    font-size:15px;
  }
`
export const PopupButton = styled.button`
  border:1px solid ${props => (props.closebtn ? 'grey' : '#3b82f6')};
  color:${props => (props.closebtn ? 'grey' : '#ffffff')};
  border-radius:4px;
  outline:none;
  cursor:pointer;
  font-size:15px;
  padding:5px 10px;
  background-color:${props => (props.closebtn ? 'transparent' : '#3b82f6')};
  margin:0px 5px;
  @media screen and (max-width:991px){
    font-size:10px;
  }
`
