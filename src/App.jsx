import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from "./pages/nav";
import Product from './pages/product'
import Persona from './pages/persona'
import Contactos from './pages/contactos'
import Compras from './pages/compras'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Nav /> }>
          <Route path='/product' element={<Product/>}/>
          <Route path='/persona' element={<Persona/>}/>
          <Route path='/contactos' element={<Contactos/>}/>
          <Route path='/compras' element={<Compras/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
