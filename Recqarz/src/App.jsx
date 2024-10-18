import { useState } from 'react'
import './App.css'
import Routing from './Component/Routing'
import Login from './Page/Login'
import Nav from './Component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100%]">
      <Nav/>
      <Routing/>
    </div>
  )
}

export default App
