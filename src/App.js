import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Speech from './components/Speech/Speech';
import Worlds from "./pages/Worlds/Worlds.js";
import Menu from "./pages/Menu/Menu.js";

// Test world image
import img from "./images/Earth.png"
import WordSearch from './components/WordSearch/WordSearch';

function App() {

  const boardLetters = [['P', 'A', 'N', 'J', 'H', 'J', 'F', 'C', 'I', 'X'],
                        ['R', 'R', 'N', 'S', 'Y', 'K', 'N', 'M', 'L' , 'Y'],
                        ['C', 'E', 'O', 'T', 'L', 'I', 'K', 'T', 'M', 'S'],
                        ['R', 'D', 'P', 'T', 'I', 'O', 'D', 'J', 'I', 'V'],
                        ['E', 'A', 'E', 'L', 'E', 'V', 'W', 'V', 'F', 'I'],
                        ['E', 'M', 'N', 'P', 'I', 'C', 'I', 'J', 'U', 'R'],
                        ['P', 'A', 'K', 'Q', 'Q', 'C', 'T', 'R', 'K', 'U'],
                        ['E', 'G', 'X', 'X', 'N', 'S', 'A', 'I', 'U', 'S'],
                        ['R', 'E', 'L', 'B', 'G', 'C', 'C', 'T', 'O', 'S'],
                        ['K', 'M', 'A', 'L', 'W', 'A', 'R', 'E', 'E', 'N']];

  const wordBank = ['protection', 'antivirus', 'replicate', 'slow', 'malware', 'creeper', 'damage', 'virus'];

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
            <Route path="/worlds" exact element={<Worlds/>} />
            <Route path="/menu" exact element={<Menu name={localStorage.username} />} />
            <Route path="/w" exact element={<WordSearch planet={"EARTH"} questionNumber={4} boardLetters={boardLetters} wordBank={wordBank} />} />
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/" component={} />
            <Route path="/" component={} /> */}
        </Routes>
    </Router>
  );
}

export default App;