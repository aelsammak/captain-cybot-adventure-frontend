import React, { useState } from "react";
import {BackgroundImg, Line, TitleContainer, WorldSelectionText, PlanetsContainer, Planet, PlanetText, PlanetsRow, PlanetDescription} from "./WorldsElements";
import background from "../../images/Worlds_Background.png"
import earth from "../../images/Earth.png"
import mars from "../../images/Mars.png"
import neptune from "../../images/Neptune.png"
import jupiter from "../../images/Jupiter.png"
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import './../../App.css';
import { Link } from 'react-router-dom';

function Worlds() {
    
    const [earthLock, setEarthLock] = useState(false);
    const [marsLock, setMarsLock] = useState(true);
    const [neptuneLock, setNeptuneLock] = useState(true);
    const [jupiterLock, setJupiterLock] = useState(true);

    /*const earthLockToggle = () => {
        earthLock ? setEarthLock(false): setEarthLock(true);
    }
    const marsLockToggle = () => {
        marsLock ? setMarsLock(false): setMarsLock(true);
    }
    const neptuneLockToggle = () => {
        neptuneLock ? setNeptuneLock(false): setNeptuneLock(true);
    }
    const jupiterLockToggle = () => {
        jupiterLock ? setJupiterLock(false): setJupiterLock(true);
    }*/

    return (
        <BackgroundImg img={background} >
            <Link to="/menu">
                <HomeIcon className="buttonClick" style={{width:"5%", height: "10%", margin: "1% 0% 0% 1%", fill:"white"}} />
            </Link>
            <TitleContainer>
                <WorldSelectionText>WORLD SELECTION</WorldSelectionText>
                <Line/>
            </TitleContainer>
            <PlanetsContainer>
                <PlanetsRow>
                    <Planet>
                        <img src={earth} alt="Earth" className={`${earthLock ? "gray" : "zoom-box"}`} style={{width: "45%", height: "70%"}}/>
                        <PlanetDescription>
                            {earthLock ? <LockIcon style={{width:"10%", height: "10%", fill:"white"}} /> : null }
                            <PlanetText>EARTH</PlanetText>
                        </PlanetDescription>
                    </Planet>
                    <Planet>
                        <img src={mars} alt="Mars" className={`${marsLock ? "gray" : "zoom-box "}`} style={{width: "45%", height: "70%"}}/>
                        <PlanetDescription>
                            {marsLock ? <LockIcon style={{width:"10%", height: "10%", fill:"white"}} /> : null }
                            <PlanetText>MARS</PlanetText>
                        </PlanetDescription>
                    </Planet>
                </PlanetsRow>
                <PlanetsRow>
                    <Planet>
                        <img src={neptune} alt="Neptune" className={`${neptuneLock ? "gray" : "zoom-box "}`} style={{width: "70%", height: "70%"}}/>
                        <PlanetDescription>
                            {neptuneLock ? <LockIcon style={{width:"10%", height: "10%", fill:"white"}} /> : null }
                            <PlanetText>NEPTUNE</PlanetText>
                        </PlanetDescription>
                    </Planet>
                    <Planet>
                        <img src={jupiter} alt="Jupiter" className={`${jupiterLock ? "gray" : "zoom-box "}`} style={{width: "85%", height: "70%"}} />
                        <PlanetDescription>
                            {jupiterLock ? <LockIcon style={{width:"10%", height: "10%", fill:"white"}} /> : null }
                            <PlanetText>JUPITER</PlanetText>
                        </PlanetDescription>
                    </Planet>
                </PlanetsRow>
            </PlanetsContainer>
        </BackgroundImg>
    );
}

export default Worlds;