import {Link} from 'react-router-dom'
import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import AppContext from '../../context/appContext'
import {MenuList, ListItem, Text, MenuButton} from './styledComponents'

const SidebarMenu = () => (
  <AppContext.Consumer>
    {value => {
      const {activeTab, changeActiveTab, darkTheme} = value

      return (
        <MenuList>
          <Link to="/" style={{textDecoration: 'none'}}>
            <ListItem>
              <MenuButton
                activeTab={activeTab === '/'}
                darkTheme={darkTheme}
                type="button"
                onClick={() => changeActiveTab('/')}
              >
                <TiHome
                  style={activeTab === '/' ? {color: '#ff0000'} : {color: ''}}
                />
                <Text activeTab={activeTab === '/'} darkTheme={darkTheme}>
                  Home
                </Text>
              </MenuButton>
            </ListItem>
          </Link>
          <Link to="/trending" style={{textDecoration: 'none'}}>
            <ListItem>
              <MenuButton
                type="button"
                onClick={() => changeActiveTab('/trending')}
                activeTab={activeTab === '/trending'}
                darkTheme={darkTheme}
              >
                <HiFire
                  style={
                    activeTab === '/trending' ? {color: '#ff0000'} : {color: ''}
                  }
                />
                <Text
                  activeTab={activeTab === '/trending'}
                  darkTheme={darkTheme}
                >
                  Trending
                </Text>
              </MenuButton>
            </ListItem>
          </Link>
          <Link to="/gaming" style={{textDecoration: 'none'}}>
            <ListItem>
              <MenuButton
                type="button"
                onClick={() => changeActiveTab('/gaming')}
                activeTab={activeTab === '/gaming'}
                darkTheme={darkTheme}
              >
                <SiYoutubegaming
                  style={
                    activeTab === '/gaming' ? {color: '#ff0000'} : {color: ''}
                  }
                />
                <Text activeTab={activeTab === '/gaming'} darkTheme={darkTheme}>
                  Gaming
                </Text>
              </MenuButton>
            </ListItem>
          </Link>
          <Link to="/saved-videos" style={{textDecoration: 'none'}}>
            <ListItem>
              <MenuButton
                type="button"
                onClick={() => changeActiveTab('/saved-videos')}
                activeTab={activeTab === '/saved-videos'}
                darkTheme={darkTheme}
              >
                <RiMenuAddFill
                  style={
                    activeTab === '/saved-videos'
                      ? {color: '#ff0000'}
                      : {color: ''}
                  }
                />
                <Text
                  activeTab={activeTab === '/saved-videos'}
                  darkTheme={darkTheme}
                >
                  Saved videos
                </Text>
              </MenuButton>
            </ListItem>
          </Link>
        </MenuList>
      )
    }}
  </AppContext.Consumer>
)

export default SidebarMenu
