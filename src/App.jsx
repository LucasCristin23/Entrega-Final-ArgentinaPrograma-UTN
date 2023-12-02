import { useState } from 'react'
import './App.css'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';


//--Componentes
import Header from './components/header';
import Footer from './components/Footer';
import Seccion1 from './components/Seccion1';
import Consejos from './components/Consejos';
import Calculadora from './components/Calculadora';
import NotFound404 from './components/NotFound404';

//--BrouserRoutes envuelve toda la app, Routes envuelve todo lo q se va a renderisar y Route son las rutas
function App() {
  return (
    <>
    <BrowserRouter>
    
      <Header />

      <Routes>

        <Route exact path='/' element={ <Seccion1/>} />

        <Route exact path='/consejos' element={ <Consejos/>} />

        <Route path='/calculadora' element={ <Calculadora/>} />

        <Route path='*' element={<NotFound404 />} />

      </Routes>

      <Footer />

    </BrowserRouter>
    </>
  )
}

export default App
