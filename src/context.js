import React, { useContext, useState } from "react"
import sublinks from "./data"
const AppContext = React.createContext()

const useGlobalContext = () => {
  return useContext(AppContext)
}
//TODO note we have created the state variables in the approvider but we could create outside and put variable name inside value
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location,setLocation] = useState({})
  const [page,setPage] = useState({page:'',links:[]})

  //functions to open and close menus/Submenu
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openSubmenu = (text,coordinates) => {
      //find link with page that matches text from button
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, useGlobalContext }
