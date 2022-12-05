import React, { useRef } from "react";
import img from "../../images/Login_Signup.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HowToPlayText, QuestionContainer, BackgroundImg, Line, QuestionTypeText, CrosswordContainer } from "./CrosswordElements";
import ReactCrossword from '@jaredreisinger/react-crossword';
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

function Crossword(props) {
    const navigate = useNavigate();
    const myData = props.data;

    /* Unpack props */
    //const crosswordData = props.crosswordData;
    const planet = props.planet;
    const questionNumber = props.questionNumber;
    const crosswordRef = useRef(null);

    const headers = {
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('access_token')
    }

    const crosswordCorrectHandler = (event) => {
        event.preventDefault();
        const answer = {
            answers: props.answers
        }
        
        axios.post(('http://localhost:8080/api/v0/questions?planet='+planet+'&questionNumber='+questionNumber), answer, {
            headers: headers
        })
            .then((res) => {
                console.log(typeof res.data.correct);
                console.log(res.data.correct == true);
                
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        
        <BackgroundImg img={img} >
            <IconButton onClick={() => {navigate("/")}}>
                    <HomeIcon style={{color: 'white', fontSize: '3.459vw', paddingLeft: '1%', paddingTop: '0.5%'}} />
            </IconButton>
            <div>
                <QuestionContainer>
                    <QuestionTypeText>Question {questionNumber}: Crossword</QuestionTypeText>
                    <HowToPlayText>Fill the crossword using the hints.</HowToPlayText>
                    <Line width={"100%"}/>
                    <CrosswordContainer>
                        <ReactCrossword onCrosswordCorrect={crosswordCorrectHandler} data={myData} theme={{gridBackground:'rgb(0,0,0,0)', numberColor:'rgba(0,0,0,0.7)', focusBackground:'#c548ff', highlightBackground:'#d77aff'}}/>
                    </CrosswordContainer>
                </QuestionContainer>
            </div>
        </BackgroundImg>
    ); 
}

export default Crossword;