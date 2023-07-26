
import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Hotel from './pages/hotel/Hotel';
import Home from './pages/Home/Home';
import Shotel from './pages/shotel/Shotel';
import "./app.css"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<Hotel/>}/>
        <Route path='/hotel/:id' element={<Shotel/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
