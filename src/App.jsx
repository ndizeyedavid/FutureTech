import futuerTechLogo from '/assets/logo/logo-single-lg.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://github.com/ndizeyedavid/FutureTech">
          <img src={futuerTechLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>FutureTech</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} disabled>
          Coming soon
        </button>
      </div>
    </>
  )
}

export default App
