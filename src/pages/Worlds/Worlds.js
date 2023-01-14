import React, { useEffect, useState } from "react";
import { BackgroundImg, Line, TitleContainer, WorldSelectionText, PlanetsContainer, Planet, PlanetText, PlanetsRow, PlanetDescription } from "./WorldsElements";
import background from "../../images/Standard_Background.png";
import earth from "../../images/Earth.png";
import mars from "../../images/Mars.png";
import neptune from "../../images/Neptune.png";
import jupiter from "../../images/Jupiter.png";
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import './../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Worlds() {

    const [world1Lock, setWorld1Lock] = useState(true);
    const [world2Lock, setWorld2Lock] = useState(true);
    const [world3Lock, setWorld3Lock] = useState(true);

    const getData = async () => {
        const { data } = await axios.get('http://localhost:8080/api/v0/users/' + localStorage.getItem("username"),
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("access_token")
                }
            });
        for (let i = 1; i < data.worlds.length; i++) {
            if (data.worlds[i - 1].levelsCompleted === 4) {
                eval("setWorld" + i + "Lock(false)");
            }
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <BackgroundImg img={background} >
            <Link to="/menu">
                <HomeIcon className="buttonClick" style={{ color: 'white', fontSize: '5vw', paddingLeft: '1%', paddingTop: '0.5%' }} />
            </Link>
            <TitleContainer>
                <WorldSelectionText>WORLD SELECTION</WorldSelectionText>
                <Line />
            </TitleContainer>
            <PlanetsContainer>
                <PlanetsRow>
                    <Link to={"/levels"} state={{ planet: 0 }}>
                        <Planet>
                            <img src={earth} alt="Earth" className={"zoom-box"} style={{ width: "45%", height: "70%" }} />
                            <PlanetDescription>
                                <PlanetText>EARTH</PlanetText>
                            </PlanetDescription>
                        </Planet>
                    </Link>
                    <Link to={`${world1Lock ? "" : "/levels"}`} state={{ planet: 1 }}>
                        <Planet>
                            <img src={mars} alt="Mars" className={`${world1Lock ? "gray" : "zoom-box "}`} style={{ width: "45%", height: "70%" }} />
                            <PlanetDescription>
                                {world1Lock ? <LockIcon style={{ width: "10%", height: "10%", fill: "white" }} /> : null}
                                <PlanetText>MARS</PlanetText>
                            </PlanetDescription>
                        </Planet>
                    </Link>
                </PlanetsRow>
                <PlanetsRow>
                    <Link to={`${world2Lock ? "" : "/levels"}`} state={{ planet: 2 }}>
                        <Planet style={{ clear: "both" }}>
                            <img src={neptune} alt="Neptune" className={`${world2Lock ? "gray" : "zoom-box "}`} style={{ width: "70%", height: "70%" }} />
                            <PlanetDescription>
                                {world2Lock ? <LockIcon style={{ width: "10%", height: "10%", fill: "white" }} /> : null}
                                <PlanetText>NEPTUNE</PlanetText>
                            </PlanetDescription>
                        </Planet>
                    </Link>
                    <Link to={`${world3Lock ? "" : "/levels"}`} state={{ planet: 3 }}>
                        <Planet>
                            <img src={jupiter} alt="Jupiter" className={`${world3Lock ? "gray" : "zoom-box "}`} style={{ width: "85%", height: "70%" }} />
                            <PlanetDescription>
                                {world3Lock ? <LockIcon style={{ width: "10%", height: "10%", fill: "white" }} /> : null}
                                <PlanetText>JUPITER</PlanetText>
                            </PlanetDescription>
                        </Planet>
                    </Link>
                </PlanetsRow>
            </PlanetsContainer>
        </BackgroundImg>
    );
}

export default Worlds;