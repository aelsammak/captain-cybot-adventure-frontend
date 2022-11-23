import React from 'react';
import { BackgroundImg } from '../../pages/SignIn/SignInElements';
import img from "../../images/Dialogue_Page.png"
import img2 from "../../images/EARTH.png"
import { TopContainer, WorldLabel } from './SpeechElements';
import { Line } from '../../pages/SignUp/SignUpElements';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function Speech() {
    const navigate = useNavigate();

    return (
        <BackgroundImg img={img}>
            <TopContainer>
                <IconButton onClick={() => {navigate("/")}}>
                    <HomeIcon style={{color: 'white', fontSize: '65px', paddingLeft: '1%', paddingTop: '0.5%'}} />
                </IconButton>
                <WorldLabel>WORLD 1 - EARTH</WorldLabel>
                <Line width={"25%"}/>
            </TopContainer>
            <div><img src={img2} alt=""></img></div>
            <div></div>
            
        </BackgroundImg>
    );
}

export default Speech;