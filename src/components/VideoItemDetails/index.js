import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Header from '../Header'
import Sidebar from '../Sidebar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import AppContext from '../../context/appContext'
import {
  Container,
  SubContainer,
  Heading,
  Para,
  Button,
  Image,
  Hr,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    loader: false,
    failureView: false,
    dataObj: {},
    like: false,
    disLike: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({loader: true})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      this.setState({loader: false, dataObj: data.video_details})
    } else {
      this.setState({loader: false, failureView: true})
    }
  }

  getVideo = () => (
    <AppContext.Consumer>
      {value => {
        const {updateSavedVideosList, darkTheme, savedVideosList} = value
        const {dataObj, like, disLike} = this.state
        const {
          title,
          video_url: videoUrl,
          channel = {},
          view_count: viewCount,
          published_at: publishedAt,
          description,
        } = dataObj

        const resultList = savedVideosList.filter(
          eachItem => eachItem.id === dataObj.id,
        )

        const videoStatus =
          savedVideosList.lenght === 0 ? false : resultList.length === 1

        const {
          name = 'iB Cricket',
          profile_image_url: profileImageUrl = '',
          subscriber_count: subscriberCount = 0,
        } = channel

        const onClickLike = () => {
          this.setState(prevState => ({disLike: false, like: !prevState.like}))
        }

        const onClickDislike = () => {
          this.setState(prevState => ({
            like: false,
            disLike: !prevState.disLike,
          }))
        }

        const onClickSave = () => {
          const savedList = [...savedVideosList, dataObj]
          updateSavedVideosList(savedList)
        }

        const onClickSaved = () => {
          const newSavedList = savedVideosList.filter(
            eachItem => eachItem.id !== dataObj.id,
          )
          updateSavedVideosList(newSavedList)
        }

        return (
          <Container column="true" darkTheme={darkTheme}>
            <ReactPlayer url={videoUrl} width="100%" minHeight="30%" />
            <Heading darkTheme={darkTheme}>{title}</Heading>
            <SubContainer detailscon="true">
              <SubContainer>
                <Para small="true">{viewCount}</Para>
                <Para small="true">{publishedAt}</Para>
              </SubContainer>
              <SubContainer>
                <Button type="button" onClick={onClickLike} active={like}>
                  <BiLike />
                  Like
                </Button>
                <Button type="button" onClick={onClickDislike} active={disLike}>
                  <BiDislike />
                  Dislike
                </Button>
                <Button
                  type="button"
                  onClick={videoStatus ? onClickSaved : onClickSave}
                  active={videoStatus}
                >
                  <RiMenuAddFill />
                  {videoStatus ? 'Saved' : 'Save'}
                </Button>
              </SubContainer>
            </SubContainer>
            <Hr />
            <SubContainer>
              <Image src={profileImageUrl} alt="website logo" />
              <SubContainer column="true">
                <Heading darkTheme={darkTheme}>{name}</Heading>
                <Para small="true">{subscriberCount} subscribers</Para>
                <Para darkTheme={darkTheme}>{description}</Para>
              </SubContainer>
            </SubContainer>
          </Container>
        )
      }}
    </AppContext.Consumer>
  )

  onClickRetry = () => {
    this.getData()
  }

  getVideoItemDetails = () => {
    const {loader, failureView} = this.state
    switch (true) {
      case loader:
        return <LoadingView />
      case failureView:
        return <FailureView onClickRetry={this.onClickRetry} />
      default:
        return this.getVideo()
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <div
              data-testid="videoItemDetails"
              style={{backgroundColor: darkTheme ? '#0f0f0f' : '#f9f9f9'}}
            >
              <Header />
              <Container>
                <Sidebar />
                {this.getVideoItemDetails()}
              </Container>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
