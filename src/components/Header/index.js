import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBoxArrowRight} from 'react-icons/bs'
import {RiMenuLine} from 'react-icons/ri'
import AppContext from '../../context/appContext'
import {
  Nav,
  NavImg,
  NavButton,
  PopupContainer,
  PopupPara,
  PopupButton,
  MobileContainer,
} from './styledComponents'

const Header = props => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme, changeTheme, updateMenu} = value
      const logoUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const themeImgUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      console.log(themeImgUrl)
      const onClickChangeTheme = () => {
        changeTheme()
      }

      const onClickConfirmBtn = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickMenu = () => {
        updateMenu()
      }

      return (
        <Nav darkTheme={darkTheme}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <NavImg src={logoUrl} alt="website logo" />
          </Link>
          <Nav subCon>
            <NavButton logoBtn data-testid="theme" onClick={onClickChangeTheme}>
              <NavImg src={themeImgUrl} alt="theme" />
            </NavButton>
            <NavImg
              profile="true"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <NavButton logout type="button" darkTheme={darkTheme}>
                  Logout
                </NavButton>
              }
            >
              {close => (
                <>
                  <PopupContainer bgcon="true">
                    <PopupPara>Are you sure, you want to logout?</PopupPara>
                    <PopupContainer>
                      <PopupButton
                        type="button"
                        onClick={() => close()}
                        closebtn="true"
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton type="button" onClick={onClickConfirmBtn}>
                        Confirm
                      </PopupButton>
                    </PopupContainer>
                  </PopupContainer>
                </>
              )}
            </Popup>
          </Nav>
          <MobileContainer>
            <NavButton logoBtn data-testid="theme" onClick={onClickChangeTheme}>
              <NavImg src={themeImgUrl} alt="theme" />
            </NavButton>
            <NavButton
              type="button"
              darkTheme={darkTheme}
              onClick={onClickMenu}
            >
              <RiMenuLine style={{fontSize: '25px'}} />
            </NavButton>
            <Popup
              modal
              trigger={
                <NavButton logout type="button" darkTheme={darkTheme}>
                  <BsBoxArrowRight style={{fontSize: '25px'}} />
                </NavButton>
              }
            >
              {close => (
                <>
                  <PopupContainer bgcon="true">
                    <PopupPara>Are you sure, you want to logout?</PopupPara>
                    <PopupContainer>
                      <PopupButton
                        type="button"
                        onClick={() => close()}
                        closebtn="true"
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton type="button" onClick={onClickConfirmBtn}>
                        Confirm
                      </PopupButton>
                    </PopupContainer>
                  </PopupContainer>
                </>
              )}
            </Popup>
          </MobileContainer>
        </Nav>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)
