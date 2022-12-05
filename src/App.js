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
import Crossword from './components/Crossword/Crossword';

function App() {
  const messages = [
    "Hello, This is Captain Cybot! Oh no! Evil malware has taken over the four worlds in our galaxy and each world has been infected with all sorts of malware like viruses, worms, trojans and ransomware. Join Captain Cybot on his adventure to defeat malware and free the galaxy once & for all. Are you ready to join Captain Cybot on his adventure?",
    "If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!",
    "Remember to wash your hands!"
  ]
  const myData = {
    "across": {
        "2": {
            "col": 5,
            "answer": "NORTON",
            "clue": "A common anti-virus software.",
            "row": 1
        },
        "5": {
            "col": 0,
            "answer": "COMPUTER",
            "clue": "A device for working with information.",
            "row": 4
        },
        "6": {
            "col": 7,
            "answer": "EMAIL",
            "clue": "A message sent through the internet.",
            "row": 5
        },
        "7": {
            "col": 1,
            "answer": "MALWARE",
            "clue": "Software that may harm your computer.",
            "row": 6
        },
        "8": {
            "col": 2,
            "answer": "VIRUSES",
            "clue": "Malicious self-reproducing programs that change how a computer works.",
            "row": 8
        }
    },
    "down": {
        "1": {
            "col": 9,
            "answer": "SOFTWARE",
            "clue": "The programs that tell the hardware what to do.",
            "row": 0
        },
        "3": {
            "col": 11,
            "answer": "REPLICATE",
            "clue": "Make an exact copy of; reproduce.",
            "row": 2
        },
        "4": {
            "col": 7,
            "answer": "CREEPER",
            "clue": "The first ever computer virus.",
            "row": 3
        }
    }
};
  
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/speech" exact element={<Speech messages={messages} planetImg={img} title={"WORLD 1 - EARTH"}/>} />
            <Route path="/worlds" exact element={<Worlds/>} />
            <Route path="/menu" exact element={<Menu/>} />
            <Route path="/crossword" exact element={<Crossword questionNumber='3' data={myData} planet='EARTH'/>} />
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/" component={} />
            <Route path="/" component={} /> */}
        </Routes>
    </Router>
  );
}

export default App;