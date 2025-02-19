import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'
import AppContext from '../../context/appContext'
import {Container, VideosList} from './styledComponents'

class Gaming extends Component {
  state = {failureView: false, loader: false, dataList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({loader: true})
    const url = `https://apis.ccbp.in/videos/gaming`
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
      this.setState({loader: false, dataList: data.videos, failureView: false})
    } else {
      this.setState({loader: false, failureView: true})
    }
  }

  getVideos = () => {
    const {dataList} = this.state
    return (
      <>
        {dataList.map(eachItem => (
          <GamingVideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </>
    )
  }

  onClickRetry = () => {
    this.getData()
  }

  getGamingVideos = () => {
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
              data-testid="gaming"
              style={{backgroundColor: darkTheme ? '#0f0f0f' : '#f9f9f9'}}
            >
              <Header />
              <Container>
                <Sidebar />
                <Container column="true">
                  <Banner text="Gaming" />
                  <VideosList darkTheme={darkTheme}>
                    {this.getGamingVideos()}
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
export default Gaming
