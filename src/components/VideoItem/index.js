import {Link} from 'react-router-dom'
import AppContext from '../../context/appContext'
import {
  ListItem,
  List,
  Heading,
  Para,
  Image,
  Container,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails, trendingVideo = false} = props
  const display = trendingVideo ? 'flex' : ''
  const {
    id,
    title,
    thumbnail_url: thumbnailUrl,
    channel,
    view_count: viewCount,
    published_at: publishedAt,
  } = videoDetails

  const {name, profile_image_url: profileImageUrl} = channel

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme, changeActiveTab} = value
        return (
          <ListItem videoitem="true" trendingvideo={trendingVideo}>
            <Link
              to={`/videos/${id}`}
              style={
                trendingVideo
                  ? {
                      textDecoration: 'none',
                      display: `${display}`,
                      height: '100%',
                      width: '100%',
                    }
                  : {textDecoration: 'none'}
              }
              onClick={() => {
                changeActiveTab('video')
              }}
            >
              <Image
                src={thumbnailUrl}
                alt="video thumbnail"
                trendingvideo={trendingVideo}
              />
              <Container trendingvideo={trendingVideo}>
                <Image
                  profileimage="true"
                  src={profileImageUrl}
                  alt="channel logo"
                  style={trendingVideo ? {display: 'none'} : {}}
                />
                <Container column="true">
                  <Heading darkTheme={darkTheme}>{title}</Heading>
                  <Para>{name}</Para>
                  <List>
                    <ListItem>
                      <p>{viewCount} views</p>
                    </ListItem>
                    <ListItem>
                      <p>{publishedAt}</p>
                    </ListItem>
                  </List>
                </Container>
              </Container>
            </Link>
          </ListItem>
        )
      }}
    </AppContext.Consumer>
  )
}
export default VideoItem
