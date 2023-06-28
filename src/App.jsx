/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import SearchBox from './components/search'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBox></SearchBox>
      <Footer></Footer>
    </>
  )
}

export default App
