import React from 'react'

const AppContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  activeTab: '',
  savedVideosList: [],
  changeActiveTab: () => {},
  updateSavedVideosList: () => {},
  showMenu:false,
  updateMenu:() => {}
})

export default AppContext
