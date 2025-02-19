import {Container, Heading, Para, Button,Image} from './styledComponents'

const NoVideos = props => {
  const {onClickRetry} = props
  const onClickRetryBtn = () => {
    onClickRetry()
  }
  return (
    <Container>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        alt="no videos"
      />
      <Heading>No Search results found</Heading>
      <Para>Try different key words or remove search filter</Para>
      <Button type="button" onClick={onClickRetryBtn}>
        Retry
      </Button>
    </Container>
  )
}
export default NoVideos
