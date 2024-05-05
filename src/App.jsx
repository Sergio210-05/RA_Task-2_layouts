import { useState } from 'react'

import './App.css'
import { Store } from './Components/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Store/>
  )
}

export default App
