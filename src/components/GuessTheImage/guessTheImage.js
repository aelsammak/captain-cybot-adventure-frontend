import React, { useState } from "react";
import img from "../../images/Login_Signup.png"
import questionImg from "../../images/World1Question2.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HowToPlayText, QuestionContainer, BackgroundImg, Line, QuestionTypeText, ErrorContainer, Error, ScrmabledWordText,SubmitBtn, Wrapper, QuestionImg } from "./guessTheImageElement";
import RICIBs from "react-individual-character-input-boxes";

function GuessTheImage(props) {

    /* Unpack props */
    const planet = props.planet;
    const questionNumber = props.questionNumber;
    const numChars = parseInt(props.numChars);

    const headers = {
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('access_token')
    }

    const [outputString, setOutputString] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showError, setShowError] = useState(false);
    //const navigate = useNavigate();

    const state = {
        amount: numChars,
        regEx: RegExp('^[a-zA-Z0-9_.-]*$')
    }

    const handleOutputString = (string) => {
        setOutputString(string);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(outputString.length);
        console.log(numChars);
        if (outputString.length === numChars) {
            const answer = {
                answers: [outputString]
            }
            axios.post(('http://localhost:8080/api/v0/questions?planet='+planet+'&questionNumber='+questionNumber), answer, {
                headers: headers
            })
                .then((res) => {
                    if (res.data.correct == true) {
                        setShowError(false);
                    } else {
                        setErrorMsg("Incorrect answer. Please try again.");
                        setShowError(true);
                    }
                }).catch(err => {
                    console.log(err)
                });
        } else {
            setErrorMsg("Please enter a character in each of the input boxes");
            setShowError(true);
        }
    }

    
    return (
        <BackgroundImg img={img} >
            <div>
            <QuestionContainer>
                <QuestionTypeText>Question {questionNumber}: Guess The Image</QuestionTypeText>
                <HowToPlayText>Give the word described by the picture below</HowToPlayText>
                <Line width={"100%"}/>
                <QuestionImg src={require(`../../images/${props.filename}`)}></QuestionImg>
                <form onSubmit={submitHandler}>
                    <Wrapper>
                        <RICIBs
                                amount={state.amount}
                                handleOutputString={handleOutputString} 
                                inputRegExp={state.regEx} 
                                key={state.amount}
                            />
                    </Wrapper>
                    <ErrorContainer>
                        {showError && <Error>{errorMsg}</Error>}
                    </ErrorContainer>
                    <SubmitBtn type="submit">Submit</SubmitBtn>
                </form>
            </QuestionContainer>
            </div>
        </BackgroundImg>
    );
}

export default GuessTheImage;