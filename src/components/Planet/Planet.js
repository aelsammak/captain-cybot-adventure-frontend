import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Levels from '../Levels/Levels';
import Questions from '../Questions/Questions';

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
                {/* <Route path="/speech" exact element={<Speech messages={messages} planetImg={img} title={"WORLD 1 - " + props.planet}/>} /> */}
                <Route path="levels" element={<Levels planet={props.planet} />} />
                <Route path="questions" element={<Questions planet={props.planet} />}/>
                <Route path="quiz" element={questions && <Quiz questions={questions} planet={props.planet} />} />
            </Routes>
        </div>
    );
}

export default Planet;