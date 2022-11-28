import React, { useState, useEffect } from "react";
import axios from 'axios';
import WordScramble from "../../components/wordScramble/wordScramble";
import GuessTheImage from "../../components/GuessTheImage/guessTheImage";

function Question(props) {
    const [isCrossword, setIsCrossword] = useState(false);
    const [isWordSearch, setIsWordSearch] = useState(false);
    const [isWordScramble, setIsWordScramble] = useState(false);
    const [isGuessTheImage, setIsGuessTheImage] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const [scrambledWord, setScrambledWord] = useState("");
    const [imgFilename, setImgFilename] = useState("");
    const [numChars, setNumChars] = useState("");

    const planet = props.planet;
    const questionNumber = props.questionNumber;

    const headers = {
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('access_token')
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/v0/questions?planet='+planet+'&questionNumber='+questionNumber, {
            headers: headers
        }).then((res) => {
            if (res.data.type === "WORD_SEARCH") {
                setIsWordSearch(true);
            } else if (res.data.type === "CROSSWORD") {
                setIsCrossword(true);
            } else if (res.data.type === "WORD_SCRAMBLE") {
                setIsWordScramble(true);
                setScrambledWord(res.data.scrambledWord);
            } else if (res.data.type === "GUESS_THE_IMAGE") {
                setIsGuessTheImage(true);
                setImgFilename(res.data.filename);
                setNumChars(res.data.numChars);
            } else {
                setError(true);
            }
            setLoading(false);
        }).catch(err => {
            console.log(err);
        });
    })

    if (isLoading){
        return <div>Loading...</div>
    }

    return (
    <div>
        {isWordScramble && <WordScramble questionNumber={questionNumber} scrambledWord={scrambledWord} planet={planet} />}
        {isGuessTheImage && <GuessTheImage questionNumber={questionNumber} numChars={numChars} filename={imgFilename} planet={planet} />}
    </div>
    );
}

export default Question;