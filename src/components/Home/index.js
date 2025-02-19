import Header from '../Header'
import Sidebar from '../Sidebar'
import Premium from '../Premium'
import Videos from '../Videos'
import {Container} from './styledComponents'
import AppContext from '../../context/appContext'

const Home = () => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <div
          data-testid="home"
          style={{backgroundColor: darkTheme ? '#181818' : '#f9f9f9'}}
        >
          <Header />
          <Container>
            <Sidebar />
            <Container subcon="true">
              <Premium />
              <Videos />
            </Container>
          </Container>
        </div>
      )
    }}
  </AppContext.Consumer>
)

export default Home
