import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'
import AppContext from '../../context/appContext'
import {Container, VideosList} from './styledComponents'

class Trending extends Component {
  state = {failureView: false, loader: false, dataList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({loader: true})
    const url = `https://apis.ccbp.in/videos/trending`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response, data)
    if (response.ok) {
      this.setState({dataList: data.videos, loader: false, failureView: false})
    } else {
      this.setState({loader: false, failureView: true})
    }
  }

  getVideos = () => {
    const {dataList} = this.state
    return (
      <>
        {dataList.map(eachItem => (
          <VideoItem
            key={eachItem.id}
            videoDetails={eachItem}
            trendingVideo="true"
          />
        ))}
      </>
    )
  }

  onClickRetry = () => {
    this.getData()
  }

  getTrendingVideos = () => {
    const {loader, failureView} = this.state
    switch (true) {
      case loader:
        return <LoadingView />
      case failureView:
        return <FailureView onClickRetry={this.onClickRetry} />
      default:
        return this.getVideos()
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <div
              data-testid="trending"
              style={{backgroundColor: darkTheme ? '#0f0f0f' : '#f9f9f9'}}
            >
              <Header />
              <Container>
                <Sidebar />
                <Container column="true">
                  <Banner text="Trending" />
                  <VideosList darkTheme={darkTheme}>
                    {this.getTrendingVideos()}
                  </VideosList>
                </Container>
              </Container>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Trending
