import {HiFire} from 'react-icons/hi'
import {Container, Heading} from './styledComponents'

const Banner = props => {
  const {text} = props
  return (
    <Container>
      <Container imagecon="true">
        <HiFire style={{color: '#ff0b37', fontSize: '30px'}} />
      </Container>
      <Heading>{text}</Heading>
    </Container>
  )
}

export default Banner
