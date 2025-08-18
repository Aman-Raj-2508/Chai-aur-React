import { useState } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Github from './components/Github/Github'
import Mainheader from './components/Mainheader/Mainheader'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>

        <Route path='/' element={<Mainheader />}>

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path="/github" element={<Github />} />

        </Route>

      </Routes>

    </>
  )
}

export default App
