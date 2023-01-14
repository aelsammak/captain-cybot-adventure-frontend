import React, {useState} from 'react';
import { BackgroundImg } from '../../pages/SignIn/SignInElements';
import img from "../../images/Standard_Background.png"
import img2 from "../../images/CybotStance1.png"
import { BottomContainer, CybotStanceImg, MiddleContainer, NextBtn, PlanetImg, TextBubble, TopContainer, WorldLabel} from './SpeechElements';
import { Line } from '../../pages/SignUp/SignUpElements';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function Speech(props) {
    const navigate = useNavigate();
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const handleClick = () => {
        console.log(props.messages)
        if (currentMessageIndex < props.messages.length - 1) {
            setCurrentMessageIndex(currentMessageIndex + 1)
        } else {
            /* TODO: navigate to the lvl 1 of the world */
            setCurrentMessageIndex(0);
        }
    };

    return (
        <BackgroundImg img={img}>
            <TopContainer>
                <IconButton onClick={() => {navigate("/")}}>
                    <HomeIcon style={{color: 'white', fontSize: '3.459vw', paddingLeft: '1%', paddingTop: '0.5%'}} />
                </IconButton>
                <WorldLabel><mark style={{backgroundColor: '#161616', color: 'white'}}>{props.title}</mark></WorldLabel>
                <Line width={"25%"}/>
            </TopContainer>

            <MiddleContainer><PlanetImg src={props.planetImg} alt=""></PlanetImg></MiddleContainer>

            <BottomContainer>
                <CybotStanceImg src={img2} alt=""></CybotStanceImg> 
                <TextBubble>
                    <div>{props.messages[currentMessageIndex]}</div>
                    <div style={{margin: "auto"}}><NextBtn onClick={handleClick}>NEXT</NextBtn></div>
                </TextBubble>
            </BottomContainer>
            
        </BackgroundImg>
    );
}

export default Speech;