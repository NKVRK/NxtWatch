import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import VideoItem from '../VideoItem'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import NoVideos from '../NoVideos'
import AppContext from '../../context/appContext'
import {Container, Input, Button, VideosList} from './styledComponents'

class Videos extends Component {
  state = {failureView: false, loader: false, videosList: [], inputValue: ''}

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({loader: true})
    const {inputValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${inputValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({videosList: data.videos, loader: false})
    } else {
      this.setState({loader: false, failureView: true})
    }
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosList()
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  getInputCon = () => {
    const {inputValue} = this.state
    return (
      <Container inputcon="true">
        <Input
          placeholder="Search"
          type="search"
          value={inputValue}
          onChange={this.onChangeInput}
        />
        <Button
          type="button"
          onClick={this.onClickSearch}
          data-testid="searchButton"
        >
          <FaSearch />
        </Button>
      </Container>
    )
  }

  getVideos = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return <NoVideos onClickRetry={this.onClickRetry} />
    }
    return (
      <VideosList>
        {videosList.map(eachItem => (
          <VideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </VideosList>
    )
  }

  getCurrentCon = darkTheme => {
    const {loader, failureView} = this.state
    switch(true){
      case loader:
        return <LoadingView/>
      case failureView:
        return <FailureView darkTheme={darkTheme} onClickRetry={this.onClickRetry}/>
      default :
        return this.getVideos()
    }

  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <Container darkTheme={darkTheme}>
              {this.getInputCon()}
              {this.getCurrentCon(darkTheme)}
            </Container>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Videos
