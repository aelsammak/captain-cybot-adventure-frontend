import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Speech from './components/Speech/Speech';
import Worlds from "./pages/Worlds/Worlds.js";
import Menu from "./pages/Menu/Menu.js";
import axios from 'axios';

// Test world image
import img from "./images/Earth.png"
import Crossword from './components/Crossword/Crossword';
import WordSearch from './components/WordSearch/WordSearch';
import GuessTheImage from './components/GuessTheImage/guessTheImage'
import WordScramble from './components/wordScramble/wordScramble'
import { SystemSecurityUpdate } from '@mui/icons-material';

function App() {

  const [boardLetters, setBoardLetters] = useState([]);
  const [myData, setMyData] = useState({'across': {}, 'down': {}});
  const [loading, setLoading] = useState(true);



  const wordBank = ['protection', 'antivirus', 'replicate', 'slow', 'malware', 'creeper', 'damage', 'virus'];

  const messages = [
    "Hello, This is Captain Cybot! Oh no! Evil malware has taken over the four worlds in our galaxy and each world has been infected with all sorts of malware like viruses, worms, trojans and ransomware. Join Captain Cybot on his adventure to defeat malware and free the galaxy once & for all. Are you ready to join Captain Cybot on his adventure?",
    "If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!",
    "Remember to wash your hands!"
  ]

  const headers = {
    'Content-type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJqd2hhbGxleTIwMjIiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoiU1lTQ180OTA3X0dST1VQXzEiLCJleHAiOjE2NzA2OTAxNTh9.sOpS2Z2n6J8DjIM6cpbC4xu0NUa2E29z56b19Grht1s9fc3Ci3bkVjFZVkgBEISkf0opZRg6LsLYKcaDn4e5235WtnOL1o3lw1_tBvCFatq8P8FyKWMkSxFhqNy4s5v8r5Q8ypE0gqt_9r3lpEmXpwyce0lnWgWqEQh20FjWmInzxPaNHoT5RWODfBsW9dU6SGBzXaefksXUbU72zUM1psWmvUlYKaliEsR7-rij6uA8uAtTU9AglJwvQ6PpCGTZ5zXPVE61Qqf1EOUMCZ4eebYIyyPADvrKNwZySc9X4ES3LNy5jo_a8l-9NGzZPZsYEq8ZfEbVXb0abBieHxU1nw'
}

useEffect(() => {
    axios.get('http://localhost:8080/api/v0/questions?planet=EARTH&questionNumber=3', {
        headers: headers
    }).then((res) => {
        if (res.data.type === "WORD_SEARCH") {
          console.log("IN WORD SEARCH")
          setBoardLetters(res.data.searchArray);
      } else if (res.data.type === "CROSSWORD") {
          setMyData(res.data.resData);
        } else if (res.data.type === "WORD_SCRAMBLE") {
        } else if (res.data.type === "GUESS_THE_IMAGE") {
        } else {
        }
    }).catch(err => {
        console.log(err);
    });
    axios.get('http://localhost:8080/api/v0/questions?planet=EARTH&questionNumber=4', {
        headers: headers
    }).then((res) => {
        if (res.data.type === "WORD_SEARCH") {
            console.log("IN WORD SEARCH")
            setBoardLetters(res.data.searchArray);
        } else if (res.data.type === "CROSSWORD") {
            setMyData(res.data.resData);
            console.log(res.data.resData);
        } else if (res.data.type === "WORD_SCRAMBLE") {
        } else if (res.data.type === "GUESS_THE_IMAGE") {
        } else {
        }
    }).catch(err => {
        console.log(err);
    });
    setLoading(false);
})
if (loading){
  return <div>Loading...</div>
}
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/speech" exact element={<Speech messages={messages} planetImg={img} title={"WORLD 1 - EARTH"}/>} />
            <Route path="/worlds" exact element={<Worlds/>} />
            <Route path="/menu" exact element={<Menu name={localStorage.username} />} />
            {/*To be removed*/}
            <Route path="/w" exact element={<WordSearch planet={"EARTH"} questionNumber={4} boardLetters={boardLetters} wordBank={wordBank} />} />
            <Route path="/crossword" exact element={<Crossword questionNumber='3' data={myData} planet='EARTH'/>} />
            <Route path="/word-scramble" exact element={<WordScramble questionNumber='3' scrambledWord='arts' planet='EARTH'/>} />
            <Route path="/guess-the-image" exact element={<GuessTheImage questionNumber='3' filename='World1Question2.png' numChars='9' planet='EARTH'/>} />
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/" component={} />
            <Route path="/" component={} /> */}
        </Routes>
    </Router>
  );
}

export default App;