import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import React from "react"
import ReactDOM from "react-dom/client"

function App() {
  return (
    <div className="main-container">
      <Info />
      <div className="about-container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

export default App;
