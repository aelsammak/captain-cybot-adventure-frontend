import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Speech from './components/Speech/Speech';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/speech" exact element={<Speech/>} />
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/" component={} />
            <Route path="/" component={} /> */}
        </Routes>
    </Router>
  );
}

export default App;