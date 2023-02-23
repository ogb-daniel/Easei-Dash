import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="h-full flex bg-gray-100">
      <Sidebar />
      <div className='flex flex-col flex-1'>
      <Nav />
<Content />
      </div>
    </div>
  )
}

export default App
