import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Speech from './components/Speech/Speech';
import Worlds from "./pages/Worlds/Worlds.js";
import Menu from "./pages/Menu/Menu.js";
import Levels from './components/Levels/Levels.js';
import Customization from './pages/Customization/Customization.js';

// Test world image
import img from "./images/Earth.png"
import Crossword from './components/Crossword/Crossword';
import WordSearch from './components/WordSearch/WordSearch';
import WordScramble from './components/WordScramble/WordScramble';
import GuessTheImage from './components/GuessTheImage/GuessTheImage';
import Quiz from './components/Quiz/Quiz';

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

const questions = [
        {
            "id": 1,
            "question": "What is Malware?",
            "options": [
                "Software that protects your computer from viruses",
                "Software that protects your computer from ransomware",
                "Software that updates your computers operating system",
                "Software that may harm your computer"
            ],
            "questionNumber": 1
        },
        {
            "id": 2,
            "question": "Which of the following may be an indication that a computer has been infected by a virus or other malware?",
            "options": [
                "Computer runs very slowly",
                "Increase in spam email",
                "Random operating system updates",
                "YouTube is not loading"
            ],
            "questionNumber": 2
        }
];
  
  return (
    <Router>
        <Routes>
            <Route path="*" exact element={<SignIn />} />
            <Route path="/" exact element={<Home/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/WordScramble" exact element={<WordScramble questionNumber='1' scrambledWord='RRECEPE' planet='EARTH'/>} />
            <Route path="/GuessTheImage" exact element={<GuessTheImage questionNumber='2' filename='World1Question2.png' numChars='9' planet='EARTH'/>} />
            <Route path="/speech" exact element={<Speech messages={messages} planetImg={img} title={"WORLD 1 - EARTH"}/>} />
            <Route path="/menu" exact element={<Menu name={localStorage.username} />} />
            <Route path="/w" exact element={<WordSearch planet={"EARTH"} questionNumber={4} boardLetters={boardLetters} wordBank={wordBank} />} />
            <Route path="/crossword" exact element={<Crossword questionNumber='3' data={myData} planet={"EARTH"} />} />
            <Route path="/quiz" exact element={<Quiz questions={questions} planet={"EARTH"} />} />
            {localStorage.getItem("username") && 
            <>
              <Route path="/menu" exact element={<Menu />} />
              <Route path="/worlds" exact element={<Worlds />} />
              <Route path="/levels" exact element={<Levels />} />
              <Route path="/customization" exact element={<Customization />} />
            </>}
        </Routes>
    </Router>
  );
}

export default App;