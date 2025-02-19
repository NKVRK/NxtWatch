import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import AppContext from './context/appContext'
import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
    activeTab: window.location.pathname,
    savedVideosList: [],
    showMenu: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  changeActiveTab = text => {
    this.setState({activeTab: text})
  }

  updateSavedVideosList = list => {
    this.setState({savedVideosList: list})
  }

  updateMenu = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  render() {
    const {darkTheme, activeTab, savedVideosList, showMenu} = this.state

    return (
      <AppContext.Provider
        value={{
          darkTheme,
          savedVideosList,
          changeTheme: this.changeTheme,
          activeTab,
          changeActiveTab: this.changeActiveTab,
          updateSavedVideosList: this.updateSavedVideosList,
          showMenu,
          updateMenu: this.updateMenu,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
