import React from 'react';
import {BackgroundImg, GetStartedBtn} from "./HomeElements";
import img from "../../images/Home_Page.png";

function Home() {
    return (
    <BackgroundImg img={img}>
        <GetStartedBtn>GET STARTED</GetStartedBtn>
    </BackgroundImg>
    );
}

export default Home;