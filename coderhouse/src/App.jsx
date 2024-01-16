import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home/Home"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Bienvenidos'/>}/>
        <Route path="/category/:category" element={<ItemListContainer greeting='Bienvenidos'/>}/>
        <Route path="producto/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
