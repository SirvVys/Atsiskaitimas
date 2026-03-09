import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Top'>Character Catalog (CRUD)</div>
      <div className='Name'></div>
      <form action="#">
        <input className='uno' type="text" placeholder='Name'></input>
        <input className='dos' type="text" placeholder='Age'></input>
        <input className='uno' type="text" placeholder='Job'></input>
        <button variant="primary" type="submit">Add</button>
        <input className='tres' type="text" placeholder='Image URL'></input>
      </form>

    </>
  )
}

export default App
