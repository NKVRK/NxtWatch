import {Link} from 'react-router-dom'
import {ListItem, Heading, Para, Image} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnail_url: thumbnailUrl,
    view_count: viewCount,
  } = videoDetails

  return (
    <ListItem>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Heading>{title}</Heading>
        <Para>{viewCount} Watching Worldwide</Para>
      </Link>
    </ListItem>
  )
}

export default GamingVideoItem
