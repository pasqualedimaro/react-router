import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import ProductList from "./pages/ProductList"
import Layout from "./components/Layout"

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Navbar />
      <main>
        <Routes>
          {/*configuro rotte*/}
          <Route path="/" element={<Layout />}>
           <Route index element={<Homepage />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/products" element={<ProductList />}/>
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
