import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import Filmes from './pages/Filmes/Filmes'
import Favoritos from "./pages/Favoritos/Favoritos";

import Erro from './pages/Erro/erro'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/favoritos" element={ <Favoritos/> } />
                <Route path="/filmes/:id" element={ <Filmes/> } />

                <Route path="*" element={ <Erro/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;