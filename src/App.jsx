import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from "./pages/nav";
import Product from './pages/product'
import Persona from './pages/persona'
import Contactos from './pages/contactos'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Nav /> }>
          <Route path='/product' element={<Product/>}/>
          <Route path='/persona' element={<Persona/>}/>
          <Route path='/contactos' element={<Contactos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
