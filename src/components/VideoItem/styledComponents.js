import styled from 'styled-components'

export const ListItem = styled.li`
    display:flex;
    ${props =>
      props.videoitem
        ? `
    width:${props.trendingvideo ? '100%' : '25%'};
    height:${props.trendingvideo ? '40%' : '250px'};
    flex-direction:column;
    margin-right:${props.trendingvideo ? '' : '10px'};
    margin-bottom:${props.trendingvideo ? '30px' : '20px'};
    align-items:${props.trendingvideo ? '' : 'center'};

     @media screen and (max-width:991px){
    width:100%;
    margin-bottom:20px;
  }
    `
        : `
    color:#475569;
    font-size:10px;
    margin-right:10px;
    align-items:center;
    `}
`
export const Image = styled.img`
    width: ${props => {
      if (props.profileimage) return '30px'
      if (props.trendingvideo) return '50%'
      return '100%'
    }};
    height: ${props => {
      if (props.profileimage) return '30px'
      if (props.trendingvideo) return '100%'
      return 'auto'
    }}; 
`
export const Heading = styled.p`
    color:${props => (props.darkTheme ? '#f1f1f1' : '#181818')};
    font-size:12px;
    margin:0px;
`
export const Para = styled.p`
    color:#475569;
    font-size:10px;
`
export const List = styled.ul`
list-style:none;
padding:0px;
margin:0px;
display:flex;
align-items:center;
`
export const Container = styled.div`
    display:flex;
    flex-direction:${props => (props.column ? 'column' : 'row')};
    padding:${props => (props.column ? '0px 10px' : '')};
    width:${props => (props.trendingvideo ? '50%' : '')};
`
