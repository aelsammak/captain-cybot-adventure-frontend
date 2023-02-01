import React, { useEffect, useState } from "react";
import { BackgroundImg, Line, TitleContainer, LevelSelectionText, LevelsContainer, Hologram, LevelText, LevelDescription, QuizScore } from "./LevelsElements";
import background from "../../images/Standard_Background.png";
import defaultHolo from "../../images/Hologram.png";
import holoStar1 from "../../images/Hologram_1_Star.png";
import holoStar2 from "../../images/Hologram_2_Star.png";
import holoStar3 from "../../images/Hologram_3_Star.png";
import holoWithCybot from "../../images/Hologram_Standing_Cybot.png";
import earth from "../../images/Earth.png";
import mars from "../../images/Mars.png";
import neptune from "../../images/Neptune.png";
import jupiter from "../../images/Jupiter.png";
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import './../../App.css';
import { Link } from 'react-router-dom';
import dline from "../../images/Dashed_Line.png";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function Levels(props) {
    const planets = [earth, mars, neptune, jupiter]
    const location = useLocation();
    const [isLoading, setLoading] = useState(true);
    const [playerInfo, setPlayerInfo] = useState();
    const navigate = useNavigate();
    var levelsImages = {
        "lv1Img": null,
        "lv2Img": null,
        "lv3Img": null,
        "lv4Img": null,
        "quizImg": planets[location.state.planet]
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/v0/users/' + localStorage.getItem("username"),
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("access_token")
                }
            }
        ).then((res) => {
            setPlayerInfo(res.data.worlds[location.state.planet]);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    } else {
        /*playerInfo.levels[0].stars = 1;
        playerInfo.levels[1].stars = 1;
        playerInfo.levels[2].stars = 2;
        playerInfo.levels[3].stars = 3;
        playerInfo.levelsCompleted = 4;
        playerInfo.quizScore = 100;*/
        for (let i = 0; i < playerInfo.levels.length; i++) {
            if (playerInfo.levelsCompleted < i) { //have not reached the level
                levelsImages[i] = defaultHolo;
            } else if (playerInfo.levels[i].stars === 0 && playerInfo.levelsCompleted === i) { //current level
                levelsImages[i] = holoWithCybot;
            } else if (playerInfo.levels[i].stars === 1) {
                levelsImages[i] = holoStar1;
            } else if (playerInfo.levels[i].stars === 2) {
                levelsImages[i] = holoStar2;
            } else if (playerInfo.levels[i].stars === 3) {
                levelsImages[i] = holoStar3;
            }
        }
    }

    return (
        <BackgroundImg img={background} >
            <Link to="/menu">
                <HomeIcon className="buttonClick" style={{ color: 'white', fontSize: '5vw', paddingLeft: '1%', paddingTop: '0.5%' }} />
            </Link>
            <TitleContainer>
                <LevelSelectionText>LEVEL SELECTION</LevelSelectionText>
                <Line />
            </TitleContainer>
            <LevelsContainer>
                <Hologram style={{ width: "13vw", marginTop: "17%" }}>
                    <img onClick={() => navigate(`/`+props.planet+"/questions?questionNumber=1")} src={levelsImages[0]} alt="holoLv1" className={`${playerInfo.levelsCompleted < 0 ? "gray" : "zoom-box"}`} style={{ height: "14vw" }} />
                    <LevelDescription>
                        {playerInfo.levelsCompleted < 0 ? <LockIcon style={{ width: "25%", height: "10%", fill: "white" }} /> : null}
                        <LevelText>LEVEL 1</LevelText>
                    </LevelDescription>
                </Hologram>
                <Hologram>
                    <img src={dline} alt="dline" className={`${playerInfo.levelsCompleted < 1 ? "filter-gray" : "dashed"}`} style={{ left: "11%", height: "12vw", marginTop: "15%", transform: "rotate(-20deg)", position: "absolute" }} />
                </Hologram>
                <Hologram style={{ width: "13vw", marginLeft: "7.1%" }}>
                    <img onClick={() => navigate(`/`+props.planet+"/questions?questionNumber=2")} src={levelsImages[1]} alt="holoLv2" className={`${playerInfo.levelsCompleted < 1 ? "gray" : "zoom-box"}`} style={{ height: "14vw" }} />
                    <LevelDescription>
                        {playerInfo.levelsCompleted < 1 ? <LockIcon style={{ width: "22%", height: "10%", fill: "white" }} /> : null}
                        <LevelText>LEVEL 2</LevelText>
                    </LevelDescription>
                </Hologram>
                <Hologram>
                    <img src={dline} alt="dline" className={`${playerInfo.levelsCompleted < 2 ? "filter-gray flipped" : "dashed flipped"}`} style={{ left: "32%", height: "12vw", marginTop: "14.7%", position: "absolute" }} />
                </Hologram>
                <Hologram style={{ width: "13vw", marginTop: "17%", marginLeft: "6.5%" }}>
                    <img onClick={() => navigate(`/`+props.planet+"/questions?questionNumber=3")} src={levelsImages[2]} alt="holoLv3" className={`${playerInfo.levelsCompleted < 2 ? "gray" : "zoom-box"}`} style={{ height: "14vw" }} />
                    <LevelDescription>
                        {playerInfo.levelsCompleted < 2 ? <LockIcon style={{ width: "22%", height: "10%", fill: "white" }} /> : null}
                        <LevelText>LEVEL 3</LevelText>
                    </LevelDescription>
                </Hologram>
                <Hologram>
                    <img src={dline} alt="dline" className={`${playerInfo.levelsCompleted < 3 ? "filter-gray" : "dashed"}`} style={{ left: "53%", height: "12vw", marginTop: "15%", transform: "rotate(-20deg)", position: "absolute" }} />
                </Hologram>
                <Hologram style={{ width: "13vw", marginLeft: "6.5%" }}>
                    <img onClick={() => navigate(`/`+props.planet+"/questions?questionNumber=4")} src={levelsImages[3]} alt="holoLv4" className={`${playerInfo.levelsCompleted < 3 ? "gray" : "zoom-box"}`} style={{ height: "14vw" }} />
                    <LevelDescription>
                        {playerInfo.levelsCompleted < 3 ? <LockIcon style={{ width: "22%", height: "10%", fill: "white" }} /> : null}
                        <LevelText>LEVEL 4</LevelText>
                    </LevelDescription>
                </Hologram>
                <Hologram>
                    <img src={dline} alt="dline" className={`${playerInfo.levelsCompleted < 4 ? "filter-gray flipped" : "dashed flipped"}`} style={{ left: "74%", height: "12vw", marginTop: "14.5%", position: "absolute" }} />
                </Hologram>
                <Hologram>
                    <QuizScore className={"quizText" + location.state.planet} style={playerInfo.quizScore < 0 ? { visibility: "hidden" } : null}>{playerInfo.quizScore}%</QuizScore>
                    <img onClick={() => navigate(`/`+props.planet+"/quiz")} src={levelsImages.quizImg} alt="quizPlanet" className={"planetStyle" + location.state.planet + " " + `${playerInfo.levelsCompleted < 4 ? "gray" : "zoom-box"}`} />
                    <LevelDescription className={`${playerInfo.levelsCompleted < 4 ? "lockedPlanetText" + location.state.planet : "activePlanetText" + location.state.planet}`}>
                        {playerInfo.levelsCompleted < 4 ? <LockIcon style={{ fontSize: '3.459vw', fill: "white" }} /> : null}
                        <LevelText>QUIZ</LevelText>
                    </LevelDescription>
                </Hologram>
            </LevelsContainer>
        </BackgroundImg>
    );
}

export default Levels;