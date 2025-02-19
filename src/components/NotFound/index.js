import Header from '../Header'
import Sidebar from '../Sidebar'
import NotFoundView from '../NotFoundView'
import AppContext from '../../context/appContext'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme} = value
      const conStyle = {
        display: 'flex',
        width: '100%',
        height: '90vh',
      }

      return (
        <>
          <Header />
          <div style={conStyle}>
            <Sidebar />
            <NotFoundView darkTheme={darkTheme} />
          </div>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
