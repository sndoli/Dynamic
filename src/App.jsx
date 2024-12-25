import { useState } from 'react'
import Dynamic from './components/Dynamic'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>

<Dynamic Name='Abul' Age='20' Profession='Doctor'></Dynamic>

<Dynamic Name='kalam' Age='30' Profession='Teacher'></Dynamic>

<Dynamic Name='Salam' Age='40' Profession='Dancer'></Dynamic>

<Dynamic Name='Abul' Age='50' Profession='IT'></Dynamic>




  </div>
  )
}

export default App
