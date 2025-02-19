import {Container, Image, Heading, Para} from './styledComponents'

const NoSavedVideos = props => {
  const {darkTheme} = props

  return (
    <Container>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
        alt="no saved videos"
      />
      <Heading darkTheme={darkTheme}>No saved videos found</Heading>
      <Para>You can save your videos while watching them</Para>
    </Container>
  )
}

export default NoSavedVideos
