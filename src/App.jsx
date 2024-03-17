import React, { useState } from 'react'
import Home from './components/Home/Home'
import SideBar from './components/sidebar/SideBar'
import Header from './components/Header'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen)
  };
  return (
    <div className='grid-container  '>
     <Header toggleSidebar={toggleSidebar}/>
     <SideBar sidebarOpen={sidebarOpen} />
     <Home/>
    </div>
  )
}

export default App
