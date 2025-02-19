import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    ${props =>
      props.inputcon
        ? `
        border:2px solid  #cccccc;
        width:50%;
         @media screen and (max-width:991px){
    width:100%;
  }
    `
        : `
        flex-direction:column;
        max-height:90vh;
        min-height:60vh;
        width:100%;
        background-color:${props.darkTheme ? '#000000' : '#ebebeb'};
        padding:30px;
        overflow-y:scroll;
    `}
`
export const Input = styled.input`
    background-color:#ffffff;
    border:none;
    outline:none;
    padding:5px 10px;
    color: #cccccc;
    font-size:15px;
    width:90%;
`
export const Button = styled.button`
    background-color:#ebebeb;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    outline:none;
    width:10%;
    border-left:2px solid  #cccccc;
`
export const VideosList = styled.ul`
   list-style-type:none;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    margin:0px;
    padding:20px 0px;
`
