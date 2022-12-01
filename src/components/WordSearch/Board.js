import React, {useState} from 'react';
import { BackgroundImg } from '../../pages/SignIn/SignInElements';
import img from "../../images/Login_Signup.png"
import { Line } from '../../pages/SignUp/SignUpElements';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { QuestionContainer } from './WordSearchElements';

function WordSearch(props) {

    const navigate = useNavigate();

    return (
        <BackgroundImg img={img}>
            <IconButton onClick={() => {navigate("/")}}>
                <HomeIcon style={{color: 'white', fontSize: '3.459vw', paddingLeft: '1%', paddingTop: '0.5%'}} />
            </IconButton>
            <QuestionContainer>
                
            </QuestionContainer>
        </BackgroundImg>
    );
}

export default WordSearch;