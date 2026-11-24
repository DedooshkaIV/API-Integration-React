import Navbar from './components/Navbar'
import Products from './pages/Products'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (

    <div className="d-flex flex-column min-vh-100">

        <Navbar />

      <div className="flex-grow-1">

            <Products />

      </div>
     
        <Footer />

    </div>

  )
}

export default App
