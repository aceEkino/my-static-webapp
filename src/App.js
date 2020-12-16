import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState('Loading...')

  useEffect(() =>
    fetch('/api/hello?name=Toto')
      .then((response) => response.text())
      .then((body) => setData(body))
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data}
      </header>
    </div>
  )
}

export default App
