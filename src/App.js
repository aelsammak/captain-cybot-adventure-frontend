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
import EarthImg from "./images/Earth.png";
import MarsImg from "./images/Mars.png";
import EarthLevel1 from './constants/EarthSpeech/EarthLevel1';
import EarthLevel2 from './constants/EarthSpeech/EarthLevel2';
import EarthLevel3 from './constants/EarthSpeech/EarthLevel3';
import EarthLevel4 from './constants/EarthSpeech/EarthLevel4';
import EarthQuizIntro from './constants/EarthSpeech/EarthQuizIntro';
import EarthQuizOutro from './constants/EarthSpeech/EarthQuizOutro';

// Test world image
import img from "./images/Earth.png"
import Crossword from './components/Crossword/Crossword';
import WordSearch from './components/WordSearch/WordSearch';
import WordScramble from './components/WordScramble/WordScramble';
import GuessTheImage from './components/GuessTheImage/GuessTheImage';
import Quiz from './components/Quiz/Quiz';
import Leaderboard from './pages/Leaderboard/Leaderboard.js';

function App() {
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
            <Route path="/leaderboard" exact element={<Leaderboard index='1'/>} />
            {localStorage.getItem("username") && 
            <>
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/worlds" exact element={<Worlds />} />
                <Route path="/earth/*" element={<Planet planet={"EARTH"} firstLevelMsgs={EarthLevel1} secondLevelMsgs={EarthLevel2} thirdLevelMsgs={EarthLevel3} fourthLevelMsgs={EarthLevel4} quizIntroMsgs={EarthQuizIntro} quizOutroMsgs={EarthQuizOutro} img={EarthImg} />} />
                <Route path="/mars/*" element={<Planet planet={"MARS"} img={MarsImg} />} />
                <Route path="/neptune/*" element={<Planet planet={"NEPTUNE"} />} />
                <Route path="/jupiter/*" element={<Planet planet={"JUPITER"} />} />
                <Route path="/customization" exact element={<Customization />} />
            </>}
        </Routes>
    </Router>
  );
}

export default App;