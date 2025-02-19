import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    width:100%;
    ${props =>
      props.bgcon
        ? `
    
    height:30vh;
    flex-direction:column;
    background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size:cover;
    padding:10px 20px;
    
    `
        : `
    justify-content:space-between;
    align-items:center;
    width:100%;
    `}

     @media screen and (max-width:991px){
        width:100%;
    }
`
export const Para = styled.p`
    font-size:18px;
    color: #0f0f0f;
`
export const Button = styled.button`
    align-self:flex-start;
    background-color:transparent;
    ${props =>
      props.closebtn
        ? `
        font-size:20px;
        outline:none;
        border:none;
    `
        : `
        color:#00306e;
        border:2px solid #00306e;
        font-size:12px;
        padding:5px;
    `}
`
export const Image = styled.img`
    height:30px;
`
