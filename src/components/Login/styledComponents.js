import styled from 'styled-components'

export const Container = styled.div`
  height: ${props => (props.bgCon ? '100vh' : '')};
  width: ${props => (props.bgCon ? '100vw' : '')};
  display: flex;
  justify-content: ${props => (props.bgCon ? 'center' : '')};
  align-items: ${props => (props.bgCon ? 'center' : '')};
  background-color: ${props => (props.bgCon ? '#f9f9f9' : 'transparent')};
  font-family: Roboto;
`
export const Form = styled.form`
  height: 70%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: shadow 5px #94a3b8;
  border-radius: 20px;
  padding: 40px;

  @media screen and (max-width:991px){
    width:100%;
  }
`
export const Image = styled.img`
  width: 30%;
  align-self: center;
`
export const Label = styled.label`
  color: ${props => (props.checkbox ? '#231f20' : '#181818')};
  font-size: ${props => (props.checkbox ? '13px' : '12px')};
  font-weight: ${props => (props.checkbox ? '' : 'bold')};
  margin-bottom: ${props => (props.checkbox ? '' : '5px')};
  margin-left: ${props => (props.checkbox ? '5px' : '')};
`
export const Input = styled.input`
  color: #94a3b8;
  font-size: 12px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #94a3b8;
  margin-bottom: 20px;
`
export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  border: 0px;
  border-radius: 5px;
  margin-top: 20px;
`
export const Message = styled.p`
  color: #ff0000;
  font-size: 15px;
`
