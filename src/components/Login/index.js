import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  Container,
  Form,
  Label,
  Input,
  Message,
  Button,
  Image,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showPassword: false,
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const formData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(formData),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, showErrorMsg: true})
    }
  }

  render() {
    const {username, password, errorMsg, showPassword, showErrorMsg} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Container bgCon="true">
        <Form onSubmit={this.onSubmitForm}>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Label htmlFor="username">USERNAME</Label>
          <Input
            placeholder="Username"
            value={username}
            id="username"
            type="text"
            onChange={this.onChangeUsername}
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            placeholder="Password"
            value={password}
            id="password"
            type={showPassword ? 'text' : 'password'}
            onChange={this.onChangePassword}
          />
          <Container>
            <Input
              id="checkbox"
              type="checkbox"
              checked={showPassword}
              onChange={this.onChangeCheckbox}
            />
            <Label htmlFor="checkbox" checkbox>
              Show Password
            </Label>
          </Container>
          <Button type="submit">Login</Button>
          {showErrorMsg && <Message>*{errorMsg}</Message>}
        </Form>
      </Container>
    )
  }
}

export default Login
