import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home.js";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/" component={} />
            <Route path="/" component={} /> */}
        </Routes>
    </Router>
  );
}

export default App;