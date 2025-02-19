import {useState} from 'react'
import {IoIosClose} from 'react-icons/io'
import {Container, Para, Image, Button} from './styledComponents'

const Premium = () => {
  const [display, setDisplay] = useState('flex')

  const onClickCloseBtn = () => {
    setDisplay('none')
  }

  return (
    <Container
      bgcon="true"
      style={{display: `${display}`}}
      data-testid="banner"
    >
      <Container>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Button
          type="button"
          closebtn="true"
          onClick={onClickCloseBtn}
          data-testid="close"
        >
          <IoIosClose />
        </Button>
      </Container>
      <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
      <Button type="button">GET IT NOW</Button>
    </Container>
  )
}
export default Premium
