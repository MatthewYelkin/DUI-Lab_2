import React from "react";
import Header from "./components/Header/Header";
import "./styles/App.css"
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
    );
}
export default App;
