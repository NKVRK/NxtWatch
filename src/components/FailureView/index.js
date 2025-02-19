import {Container, Image, Heading, Para, Button} from './styledComponents'

const FailureView = props => {
  const {darkTheme, onClickRetry} = props

  const onClickRetryBtn = () => {
    onClickRetry()
  }
  const imageUrl = darkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
  return (
    <Container>
      <Image src={imageUrl} alt="failure view" />
      <Heading darkTheme={darkTheme}>Oops! Something Went Wrong</Heading>
      <Para>
        We are having some trouble to complete your request.Please try again
      </Para>
      <Button type="button" onClick={onClickRetryBtn}>
        Retry
      </Button>
    </Container>
  )
}

export default FailureView
