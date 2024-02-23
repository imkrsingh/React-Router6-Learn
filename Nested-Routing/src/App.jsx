import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Filter from './component/Filter'
import Navbar from './component/Navbar'
import Page404 from './component/Page404'
import User from './component/User'
import NavBarLink from './component/NavBarLink'
import Contact from './component/Contact'
import Company from './component/Company'
import Channel from './component/Channel'
import Othter from './component/Othter'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <NavBarLink/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/filterer" element={<Filter/>} />

          //404 error Page
          {/* <Route path="/*" element={<Page404/>} /> */}
          // Redirect page
          <Route path="/*" element={<Navigate to="/" />} />

          //Use param hooks
          <Route path="User/:name" element={<User />} />

          //Use Nested Routing
          <Route path="/contact/" element={<Contact/>}>
            <Route path='company' element={<Company/>}/>
            <Route path='channel' element={<Channel/>}/>
            <Route path='other' element={<Othter/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
