import AppContext from '../../context/appContext'
import {
  Container,
  Heading,
  Image,
  Para,
  List,
  ListItem,
} from './styledComponents'

const ContactInfo = () => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <Container>
          <Heading darkTheme={darkTheme}>CONTACT US</Heading>
          <List>
            <ListItem>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </ListItem>
            <ListItem>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
            </ListItem>
            <ListItem>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </ListItem>
          </List>
          <Para darkTheme={darkTheme}>Enjoy! Now to see your channels and recommendations!</Para>
        </Container>
      )
    }}
  </AppContext.Consumer>
)
export default ContactInfo
