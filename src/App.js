import React from "react";
import Header from "./components/Header/Header";
import "./styles/App.css"
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ListOfSingersPage from "./pages/ListOfSingersPage/ListOfSingersPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SingerPage from "./pages/SingerPage/SingerPage";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="" element={<HomePage/>}/>
                <Route path="/artists" element={<ListOfSingersPage/>}/>
                <Route path="artists/:id" element={<SingerPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}
export default App;
