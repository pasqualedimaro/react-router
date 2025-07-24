import { BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import ProductList from "./pages/ProductList"
import DefaultLayouts from "./layouts/DefaultLayouts"

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          {/*configuro rotte*/}
          <Route Component={DefaultLayouts}>
           <Route path="/" element={<Homepage />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/products" element={<ProductList />}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
