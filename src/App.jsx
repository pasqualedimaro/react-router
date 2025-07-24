import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
      <Footer />
      <Navbar />
      <Header />
    </BrowserRouter>
    </>
  )
}

export default App
