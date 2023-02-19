import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Levels from '../Levels/Levels';
import Questions from '../Questions/Questions';
import Speech from "../Speech/Speech";

function Planet(props) {

    const [questions, setQuestions] = useState([]);                         

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    };

    useEffect(() => {
        axios.get(('http://localhost:8080/api/v0/quizzes?planet='+props.planet), {
            headers: headers
        }).then((res) => {
            setQuestions(res.data.questions);
        }).catch(err => {
            console.log(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Routes>
                <Route path="/speech/1" element={<Speech messages={props.firstLevelMsgs} planetImg={props.img} title={props.planet + " - LEVEL 1"} redirect={"/"+props.planet+"/questions?questionNumber=1"} />} />
                <Route path="/speech/2" element={<Speech messages={props.secondLevelMsgs} planetImg={props.img} title={props.planet + " - LEVEL 2"} redirect={"/"+props.planet+"/questions?questionNumber=2"} />} />
                <Route path="/speech/3" element={<Speech messages={props.thirdLevelMsgs} planetImg={props.img} title={props.planet + " - LEVEL 3"} redirect={"/"+props.planet+"/questions?questionNumber=3"} />} />
                <Route path="/speech/4" element={<Speech messages={props.fourthLevelMsgs} planetImg={props.img} title={props.planet + " - LEVEL 4"} redirect={"/"+props.planet+"/questions?questionNumber=4"} />} />
                <Route path="/speech/5" element={<Speech messages={props.quizIntroMsgs} planetImg={props.img} title={props.planet + " - QUIZ INTRO"} redirect={"/"+props.planet+"/quiz"} />} />
                <Route path="/speech/6" element={<Speech messages={props.quizOutroMsgs} planetImg={props.img} title={props.planet + " - COMPLETED"} redirect={"/worlds"} />} />
                <Route path="levels" element={<Levels planet={props.planet} />} />
                <Route path="questions" element={<Questions planet={props.planet} />}/>
                <Route path="quiz" element={questions && <Quiz questions={questions} planet={props.planet} />} />
            </Routes>
        </div>
    );
}

export default Planet;