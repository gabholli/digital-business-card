import './App.css';
import Info from './components/Info';
import React from "react"
import ReactDOM from "react-dom/client"

function App() {
  return (
    <div className="main-container">
      <Info />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

export default App;
