import {Container, Image, Heading, Para} from './styledComponents'

const NotFoundView = props => {
  const {darkTheme} = props
  const imageUrl = darkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <Container darkTheme={darkTheme}>
      <Image src={imageUrl} alt="not found" />
      <Heading darkTheme={darkTheme}>Page Not Found</Heading>
      <Para>We are sorry,the page you requested could not be found.</Para>
    </Container>
  )
}
export default NotFoundView
