import Loader from 'react-loader-spinner'

const LoadingView = () => (
  <div
    data-testid="loader"
    style={{
      width: '100%',
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  </div>
)
export default LoadingView
