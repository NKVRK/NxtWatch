import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import VideoItem from '../VideoItem'
import NoSavedVideos from '../NoSavedVideos'
import AppContext from '../../context/appContext'
import {Container, VideosList} from './styledComponents'

const SavedVideos = () => {
  const getSavedVideos = list => (
    <>
      {list.map(eachItem => (
        <VideoItem
          key={eachItem.id}
          videoDetails={eachItem}
          trendingVideo="true"
        />
      ))}
    </>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {savedVideosList, darkTheme} = value
        return (
          <div
            data-testid="savedVideos"
            style={{backgroundColor: darkTheme ? '#0f0f0f' : '#f9f9f9'}}
          >
            <Header />
            <Container>
              <Sidebar />
              <Container column="true">
                {savedVideosList.length === 0 ? (
                  <NoSavedVideos darkTheme={darkTheme} />
                ) : (
                  <>
                    <Banner text="Saved Videos" />
                    <VideosList darkTheme={darkTheme}>
                      {getSavedVideos(savedVideosList)}
                    </VideosList>
                  </>
                )}
              </Container>
            </Container>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
export default SavedVideos
