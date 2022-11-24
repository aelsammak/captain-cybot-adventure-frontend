import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Speech from './components/Speech/Speech';

// Test world image
import img from "./images/EARTH.png"

function App() {
  const messages = [
    "Hello, This is Captain Cybot! Oh no! Evil malware has taken over the four worlds in our galaxy and each world has been infected with all sorts of malware like viruses, worms, trojans and ransomware. Join Captain Cybot on his adventure to defeat malware and free the galaxy once & for all. Are you ready to join Captain Cybot on his adventure?",
    "If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!",
    "Remember to wash your hands!"
  ]
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/speech" exact element={<Speech messages={messages} planetImg={img} title={"WORLD 1 - EARTH"}/>} />
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/" component={} />
            <Route path="/" component={} /> */}
        </Routes>
    </Router>
  );
}

export default App;