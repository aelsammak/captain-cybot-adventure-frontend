import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Worlds from "./pages/Worlds/Worlds.js";
import Menu from "./pages/Menu/Menu.js";
import Customization from './pages/Customization/Customization.js';
import Planet from './components/Planet/Planet';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="*" exact element={<SignIn />} />
            <Route path="/" exact element={<Home/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            {localStorage.getItem("username") && 
            <>
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/worlds" exact element={<Worlds />} />
                <Route path="/earth/*" element={<Planet planet={"EARTH"} />} />
                <Route path="/mars/*" element={<Planet planet={"MARS"} />} />
                <Route path="/neptune/*" element={<Planet planet={"NEPTUNE"} />} />
                <Route path="/jupiter/*" element={<Planet planet={"JUPITER"} />} />
                <Route path="/customization" exact element={<Customization />} />
            </>}
        </Routes>
    </Router>
  );
}

export default App;