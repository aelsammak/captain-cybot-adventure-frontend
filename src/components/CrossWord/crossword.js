import React, { useState } from "react";
import img from "../../images/Login_Signup.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HowToPlayText, QuestionContainer, BackgroundImg, Line, QuestionTypeText, ErrorContainer, Error, ScrmabledWordText,SubmitBtn, Wrapper } from "./crosswordElement";
import Crossword from '@jaredreisinger/react-crossword';

function CrosswordQuestion() {

    const [outputString, setOutputString] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showError, setShowError] = useState(false);
    //const navigate = useNavigate();

    const myData = {
        "across": {
            "2": {
                "col": 5,
                "answer": "XXXXXXX",
                "clue": "A common anti-virus software.",
                "row": 1
            },
            "5": {
                "col": 0,
                "answer": "XXXXXX",
                "clue": "A device for working with information.",
                "row": 4
            },
            "6": {
                "col": 7,
                "answer": "XXXXXXXXX",
                "clue": "A message sent through the internet.",
                "row": 5
            },
            "7": {
                "col": 1,
                "answer": "XXXXXXXX",
                "clue": "Software that may harm your computer.",
                "row": 6
            },
            "8": {
                "col": 2,
                "answer": "XXXXXXX",
                "clue": "Malicious self-reproducing programs that change how a computer works.",
                "row": 8
            }
        },
        "down": {
            "1": {
                "col": 9,
                "answer": "XXXXXXXX",
                "clue": "The programs that tell the hardware what to do.",
                "row": 0
            },
            "3": {
                "col": 11,
                "answer": "XXXXX",
                "clue": "Make an exact copy of; reproduce.",
                "row": 2
            },
            "4": {
                "col": 7,
                "answer": "XXXXXXX",
                "clue": "The first ever computer virus.",
                "row": 3
            }
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
    }
    

    return (
        
        <BackgroundImg img={img} >
            <div>
                <QuestionContainer>
                    <QuestionTypeText>Question {1}: Word Scramble</QuestionTypeText>
                    <HowToPlayText>Unscramble the following word</HowToPlayText>
                    <Line width={"100%"}/>
                    <Crossword data={myData}>
                    </Crossword>
                </QuestionContainer>
            </div>
        </BackgroundImg>
    ); 
    /*
    return (
        <Crossword data={myData} />
    ) */
}

export default CrosswordQuestion;