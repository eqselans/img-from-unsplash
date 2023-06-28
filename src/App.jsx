/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import SearchBox from './components/search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBox></SearchBox>
    </>
  )
}

export default App
