import React from "react";
import Header from "./components/Header";
import "./styles/App.css"
import SingerOfDay from "./components/SingerOfDay/SingerOfDay";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <SingerOfDay></SingerOfDay>
        </div>
    );
}
export default App;
