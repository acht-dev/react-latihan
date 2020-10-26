import React from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </div>
  )
}
