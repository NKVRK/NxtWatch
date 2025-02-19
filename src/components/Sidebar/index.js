import SidebarMenu from '../SidebarMenu'
import ContactInfo from '../ContactInfo'
import AppContext from '../../context/appContext'
import {SidebarContainer} from './styledComponents'

const Sidebar = () => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme, showMenu} = value
      return (
        <SidebarContainer darkTheme={darkTheme} showMenu={showMenu}>
          <SidebarMenu />
          <ContactInfo />
        </SidebarContainer>
      )
    }}
  </AppContext.Consumer>
)

export default Sidebar
