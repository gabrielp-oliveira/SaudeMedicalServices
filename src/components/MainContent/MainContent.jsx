import React from 'react'
import './mainContent.css'
import MainPage from './MainPage'
import {Routes, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
function MainContent({lang}) {
  return (
    <main className='mainContent'>
      <Routes>
        <Route path='/' exact element={<MainPage lang={lang}/>}></Route>
        <Route path='about' element={<About lang={lang}/>}></Route>
        <Route path='contact' element={<Contact lang={lang}/>}></Route>
      </Routes>
    </main>
  )
}

export default MainContent
