import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    ${props =>
      props.imagecon
        ? `
    height:60px;
    width:60px;
    background-color:#313131;
    justify-content:center;
    border-radius:50%;
    `
        : `
    background-color:#383838;
    height:100px;
    width:100%;
    padding:15px 50px;
            @media screen and (max-width:991px){
    padding:20px;
  }
    `}

  
`
export const Heading = styled.h1`
    color:#ffffff;
    font-size:30px;
    margin-left:10px;
`
