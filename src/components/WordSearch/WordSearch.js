import React, {useState, useEffect} from 'react';
import { BackgroundImg } from '../../pages/SignIn/SignInElements';
import img from "../../images/Login_Signup.png"
import { Line } from '../../pages/SignUp/SignUpElements';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { QuestionContainer, Rectangle, Board, QuestionTypeText, HowToPlayText, WordBank, Word } from './WordSearchElements';
import Letter from './Letter';

function WordSearch(props) {

    const boardLetters = [['P', 'A', 'N', 'J', 'H', 'J', 'F', 'C', 'I', 'X'],
                        ['R', 'R', 'N', 'S', 'Y', 'K', 'N', 'M', 'L' , 'Y'],
                        ['C', 'E', 'O', 'T', 'L', 'I', 'K', 'T', 'M', 'S'],
                        ['R', 'D', 'P', 'T', 'I', 'O', 'D', 'J', 'I', 'V'],
                        ['E', 'A', 'E', 'L', 'E', 'V', 'W', 'V', 'F', 'I'],
                        ['E', 'M', 'N', 'P', 'I', 'C', 'I', 'J', 'U', 'R'],
                        ['P', 'A', 'K', 'Q', 'Q', 'C', 'T', 'R', 'K', 'U'],
                        ['E', 'G', 'X', 'X', 'N', 'S', 'A', 'I', 'U', 'S'],
                        ['R', 'E', 'L', 'B', 'G', 'C', 'C', 'T', 'O', 'S'],
                        ['K', 'M', 'A', 'L', 'W', 'A', 'R', 'E', 'E', 'N']];


    /* Only allow for squard grids, therefore rowLength == colLength. So just use one variable */
    const gridRowColLen = 10;

    const wordBank = ['protection', 'antivirus', 'replicate', 'slow', 'malware', 'creeper', 'damage', 'virus'];

    const [wordsFound, updateWordsFound] = useState([]);
    const [wordSelected, setWordSelected] = useState("");
    const [letterSelectedCoordinate, setLetterSelectedCoordinate] = useState({rowIndex: -1, colIndex: -1});
    const [direction, setDirection] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (wordBank.includes(wordSelected)) {
            let indexOfWord = wordBank.indexOf(wordSelected);
            updateWordsFound(wordsFound => wordsFound.concat(indexOfWord));
            setWordSelected("");
            setLetterSelectedCoordinate({rowIndex: -1, colIndex: -1});
            setDirection("")
            console.log(wordsFound);
        }
        console.log("DIRECTION IN PARENT: " + direction)
    }, [wordSelected])

    return (
        <BackgroundImg img={img}>
            <IconButton onClick={() => {navigate("/")}}>
                <HomeIcon style={{color: 'white', fontSize: '3.459vw', paddingLeft: '1%', paddingTop: '0.5%'}} />
            </IconButton>
            <QuestionContainer>
                <QuestionTypeText>Question 3: Word Search</QuestionTypeText>
                <HowToPlayText>Find all of the words hidden in the grid! Click on the letters in the correct order to form a word.</HowToPlayText>
                <Line width={"100%"}/>
                <Rectangle>
                    <Board>
                        <tbody>
                            {boardLetters.map((items, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        {items.map((subItems, colIndex) => {
                                            // TOP ROW
                                            if (rowIndex === 0) {
                                                if (colIndex === 0) {
                                                    // TOP LEFT CORNER -> Neighbours are: boardLetters[0][1] (RIGHT), boardLetters[1][0] (DOWN), boardLetters[1][1] (DOWN-RIGHT)
                                                    return (
                                                        <Letter key={colIndex} letter={subItems} 
                                                                coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                neighbours={[{rowIndex: 0, colIndex: 1, direction: "RIGHT"}, {rowIndex: 1, colIndex: 0, direction: "DOWN"}, 
                                                                {rowIndex: 1, colIndex: 1, direction: "DOWN-RIGHT"}]} 
                                                                letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                setWordSelected={setWordSelected} wordSelected={wordSelected}
                                                                direction={direction} setDirection={setDirection} />
                                                    )
                                                } else if (colIndex === gridRowColLen-1) {
                                                    // TOP RIGHT CORNER -> Neighbours are: boardLetters[0][colIndex-1] (LEFT), boardLetters[1][colIndex] (DOWN), boardLetters[1][colIndex-1] (DOWN-LEFT)
                                                    return (
                                                        <Letter key={colIndex} letter={subItems} 
                                                                coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                neighbours={[{rowIndex: 0, colIndex: colIndex-1, direction: "LEFT"}, 
                                                                {rowIndex: 1, colIndex: colIndex, direction: "DOWN"}, {rowIndex: 1, colIndex: colIndex-1, direction: "DOWN-LEFT"}]} 
                                                                letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                setWordSelected={setWordSelected} wordSelected={wordSelected} 
                                                                direction={direction} setDirection={setDirection} />
                                                    )
                                                } else {
                                                    // MIDDLE TOP ROW -> Neighbours are: 
                                                    // boardLetters[0][colIndex-1] (LEFT), boardLetters[1][colIndex-1] (DOWN-LEFT)
                                                    // boardLetters[1][colIndex] (DOWN), boardLetters[1][colIndex+1] (DOWN-RIGHT), boardLetters[0][colIndex+1] (RIGHT)
                                                    return (
                                                        <Letter key={colIndex} letter={subItems} 
                                                                coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                neighbours={[{rowIndex: 0, colIndex: colIndex-1, direction: "LEFT"}, {rowIndex: 1, colIndex: colIndex-1, direction: "DOWN-LEFT"}, 
                                                                {rowIndex: 1, colIndex: colIndex, direction: "DOWN"}, {rowIndex: 1, colIndex: colIndex+1, direction: "DOWN-RIGHT"}, 
                                                                {rowIndex: 0, colIndex: colIndex+1, direction: "RIGHT"}]} 
                                                                letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                setWordSelected={setWordSelected} wordSelected={wordSelected} 
                                                                direction={direction} setDirection={setDirection} />
                                                    )
                                                }
                                            } else if (rowIndex === gridRowColLen-1) { // BOTTOM ROW
                                                if (colIndex === 0) {
                                                    // BOTTOM LEFT CORNER -> Neighbours are: boardLetters[rowIndex-1][0] (UP), boardLetters[rowIndex][1] (RIGHT), boardLetters[rowIndex-1][1] (UP-RIGHT)
                                                    return (
                                                        <Letter key={colIndex} letter={subItems} 
                                                                coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                neighbours={[{rowIndex: rowIndex-1, colIndex: 0, direction: "UP"}, {rowIndex: rowIndex, colIndex: 1, direction: "RIGHT"}, 
                                                                {rowIndex: rowIndex-1, colIndex: 1, direction: "UP-RIGHT"}]} 
                                                                letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                setWordSelected={setWordSelected} wordSelected={wordSelected} 
                                                                direction={direction} setDirection={setDirection} />
                                                    )
                                                } else if (colIndex === gridRowColLen-1) {
                                                    // BOTTOM RIGHT CORNER -> Neighbours are: boardLetters[rowIndex][colIndex-1] (LEFT), boardLetters[rowIndex-1][colIndex] (UP), boardLetters[rowIndex-1][colIndex-1] (UP-LEFT)
                                                    return (
                                                        <Letter key={colIndex} letter={subItems} 
                                                                coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                neighbours={[{rowIndex: rowIndex, colIndex: colIndex-1, direction: "LEFT"}, {rowIndex: rowIndex-1, colIndex: colIndex, direction: "UP"},
                                                                 {rowIndex: rowIndex-1, colIndex: colIndex-1, direction: "UP-LEFT"}]} 
                                                                letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                setWordSelected={setWordSelected} wordSelected={wordSelected}
                                                                direction={direction} setDirection={setDirection} />
                                                    )
                                                } else {
                                                    // MIDDLE BOTTOM ROW -> Neighbours are: 
                                                    // boardLetters[rowIndex][colIndex-1] (LEFT), boardLetters[rowIndex-1][colIndex-1] (UP-LEFT)
                                                    // boardLetters[rowIndex-1][colIndex] (UP), boardLetters[rowIndex][colIndex+1] (RIGHT), boardLetters[rowIndex-1][colIndex+1] (UP-RIGHT)
                                                    return (
                                                        <Letter key={colIndex} letter={subItems} 
                                                                coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                neighbours={[{rowIndex: rowIndex, colIndex: colIndex-1, direction: "LEFT"}, {rowIndex: rowIndex-1, colIndex: colIndex-1, direction: "UP-LEFT"}, 
                                                                {rowIndex: rowIndex-1, colIndex: colIndex, direction: "UP"}, {rowIndex: rowIndex, colIndex: colIndex+1, direction: "RIGHT"}, 
                                                                {rowIndex: rowIndex-1, colIndex: colIndex+1, direction: "UP-RIGHT"}]} 
                                                                letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                setWordSelected={setWordSelected} wordSelected={wordSelected}
                                                                direction={direction} setDirection={setDirection} />
                                                    )
                                                }
                                            } else {
                                                if (colIndex === 0) { // FIRST COLUMN
                                                    if (rowIndex !== 0 && rowIndex !== gridRowColLen-1) { 
                                                        // LEFT SIDE COLUMN IN BETWEEN CORNERS (not including top-left & bottom-left corners) -> Neighbours are:
                                                        // boardLetters[rowIndex-1][0] (UP), boardLetters[rowIndex-1][1] (UP-RIGHT)
                                                        // boardLetters[rowIndex][1] (RIGHT), boardLetters[rowIndex+1][0] (DOWN), boardLetters[rowIndex+1][1] (DOWN-RIGHT)
                                                        return (
                                                            <Letter key={colIndex} letter={subItems} 
                                                                    coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                    neighbours={[{rowIndex: rowIndex-1, colIndex: 0, direction: "UP"}, {rowIndex: rowIndex-1, colIndex: 1, direction: "UP-RIGHT"}, {rowIndex: rowIndex, colIndex: 1, direction: "RIGHT"}, 
                                                                    {rowIndex: rowIndex+1, colIndex: 0, direction: "DOWN"}, {rowIndex: rowIndex+1, colIndex: 1, direction: "DOWN-RIGHT"}]} 
                                                                    letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                    setWordSelected={setWordSelected} wordSelected={wordSelected}
                                                                    direction={direction} setDirection={setDirection} />
                                                        )
                                                    }
                                                } else if (colIndex === gridRowColLen-1) { // LAST COLUMN
                                                    if (rowIndex !== 0 && rowIndex !== gridRowColLen-1) {
                                                        // RIGHT SIDE COLUMN IN BETWEEN CORNERS (not including top-right & bottom-right corners) -> Neighbours are:
                                                        // boardLetters[rowIndex-1][colIndex] (UP), boardLetters[rowIndex-1][colIndex-1] (UP-LEFT)
                                                        // boardLetters[rowIndex][colIndex-1] (LEFT), boardLetters[rowIndex+1][colIndex] (DOWN), boardLetters[rowIndex+1][colIndex-1] (DOWN-LEFT)
                                                        return (
                                                            <Letter key={colIndex} letter={subItems} 
                                                                    coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                    neighbours={[{rowIndex: rowIndex-1, colIndex: colIndex, direction: "UP"}, {rowIndex: rowIndex-1, colIndex: colIndex-1, direction: "UP-LEFT"}, {rowIndex: rowIndex, colIndex: colIndex-1, direction: "LEFT"}, 
                                                                    {rowIndex: rowIndex+1, colIndex: colIndex, direction: "DOWN"}, {rowIndex: rowIndex+1, colIndex: colIndex-1, direction: "DOWN-LEFT"}]} 
                                                                    letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                    setWordSelected={setWordSelected} wordSelected={wordSelected}
                                                                    direction={direction} setDirection={setDirection} />
                                                        ) 
                                                    }
                                                } else {
                                                    // ALL THE LETTERS INSIDE
                                                    // boardLetters[rowIndex][colIndex-1] (LEFT), boardLetters[rowIndex-1][colIndex-1] (UP-LEFT)
                                                    // boardLetters[rowIndex-1][colIndex] (UP), boardLetters[rowIndex-1][colIndex+1] (UP-RIGHT), boardLetters[rowIndex][colIndex+1] (RIGHT)
                                                    // boardLetters[rowIndex+1][colIndex+1] (DOWN-RIGHT), boardLetters[rowIndex+1][colIndex] (DOWN), boardLetters[rowIndex+1][colIndex-1] (DOWN-LEFT) 
                                                    return (
                                                        <Letter key={colIndex} letter={subItems} 
                                                                coordinate={{rowIndex: rowIndex, colIndex: colIndex}} 
                                                                neighbours={[{rowIndex: rowIndex, colIndex: colIndex-1, direction: "LEFT"}, {rowIndex: rowIndex-1, colIndex: colIndex-1, direction: "UP-LEFT"}, 
                                                                {rowIndex: rowIndex-1, colIndex: colIndex, direction: "UP"}, {rowIndex: rowIndex-1, colIndex: colIndex+1, direction: "UP-RIGHT"}, 
                                                                {rowIndex: rowIndex, colIndex: colIndex+1, direction: "RIGHT"}, {rowIndex: rowIndex+1, colIndex: colIndex+1, direction: "DOWN-RIGHT"}, 
                                                                {rowIndex: rowIndex+1, colIndex: colIndex, direction: "DOWN"}, {rowIndex: rowIndex+1, colIndex: colIndex-1, direction: "DOWN-LEFT"}]} 
                                                                letterSelectedCoordinate={letterSelectedCoordinate} setLetterSelectedCoordinate={setLetterSelectedCoordinate}
                                                                setWordSelected={setWordSelected} wordSelected={wordSelected}
                                                                direction={direction} setDirection={setDirection} />
                                                    )
                                                }
                                            }
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Board>
                    <WordBank>
                        {wordBank.map((items, index) => {
                                return (
                                    <Word key={index} isFound={wordsFound.includes(index)}>{items}</Word>
                                );
                        })} 
                    </WordBank>
                </Rectangle>
            </QuestionContainer>
        </BackgroundImg>
    );
}

export default WordSearch;