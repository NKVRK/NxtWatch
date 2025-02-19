import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:${props => (props.column ? 'column' : 'row')};
    width:${props => (props.column ? '80%' : '100%')};
    height:${props => (props.column ? '100%' : '90vh')};
    padding:${props => (props.column ? '25px 20px' : '')};
    background-color:${props => (props.darkTheme ? '#000000' : '')};

            @media screen and (max-width:991px){
    width:${props => (props.column ? '100vw' : '')};
    flex-direction:column;
  }
`
export const SubContainer = styled.div`
    display:flex;
    flex-direction:${props => (props.column ? 'column' : 'row')};
    justify-content:${props => (props.detailscon ? 'space-between' : '')};
    align-items:${props => (props.detailscon ? 'center' : '')};
    padding:0px;
`

export const Heading = styled.p`
    color:${props => (props.darkTheme ? '#ffffff' : '#000000')};
    font-size:15px;
`
export const Para = styled.p`
    color:${props => {
      switch (true) {
        case props.small:
          return '#94a3b8'
        case props.darkTheme:
          return '#f1f1f1'
        default:
          return '#000000'
      }
    }};  
    font-size:10px;
`
export const Image = styled.img`
    height:30px;
    width:30px;
    margin-right:10px;
    margin-top:10px;
`
export const Hr = styled.hr`
    border:1px solid #94a3b8;
    border-radius:5px;
    width:100%;
`
export const Button = styled.button`
    color:${props => (props.active ? '#2563eb' : '#64748b')};
    border:none;
    outline:none;
    background-color:transparent;
    font-size:10px;
    display:flex;
    margin-right:10px;
    align-items:center;
`
