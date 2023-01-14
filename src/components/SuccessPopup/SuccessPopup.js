import React from 'react';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import {PopUpContainer, StarsImg, ContinueBtn} from "./SuccessPopupElements";
import oneStar from "../../images/1_star.png";
import twoStar from "../../images/2_star.png";
import threeStar from "../../images/3_star.png";

function SuccessPopup(props) {

    const navigate = useNavigate();

    return (
        <Popup open={true} position="center" repositionOnResize modal>
            <PopUpContainer>
                {props.starsGained === 1 && <StarsImg src={oneStar} alt=""/>}
                {props.starsGained === 2 && <StarsImg src={twoStar} alt=""/>}
                {props.starsGained === 3 && <StarsImg src={threeStar} alt=""/>}
                <h1 style={{fontWeight: "600", paddingBottom: "1%"}}>CONGRATULATIONS</h1>
                <h4>YOU HAVE COMPLETED QUESTION {props.questionNumber}!</h4>
                <ContinueBtn onClick={() => navigate(props.redirect)}>CONTINUE</ContinueBtn>
            </PopUpContainer>
        </Popup>
    );
}

export default SuccessPopup;