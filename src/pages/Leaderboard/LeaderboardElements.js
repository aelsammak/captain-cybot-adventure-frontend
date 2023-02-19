import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const TitleContainer = styled.div`
    position: absolute;
    top: 4%;
    left: 50%;
    width: 48%;
    height: 14%;
    transform: translate(-50%, -50%);
    background: #000A;
    align-items: center;
    text-align: center;
    margin-top: 4%;
    padding: 1% 3% 1% 3%;
    border: 3px solid white;
    border-radius: 10px;
`

export const LevelSelectionText = styled.h1`
    margin-bottom: 1%;
    color: #fff;
    font-weight: 600;
    height: 7vh;
    line-height: 7vh;
    font-size: 7vh;
    text-align: center;
`

export const SignInContainer = styled.div`
    position: absolute;
    top: 59%;
    left: 50%;
    width: 90%;
    height: 36vw;
    transform: translate(-50%, -50%);
    background: #000A;
    align-items: center;
    text-align: center;
    padding: 0.5% 3% 0% 3%;
    border: 0.2vw solid white;
    border-radius: 2vw;
`
export const Column = styled.div`
    float: left;
    width: 33.33%;
    padding: 0.7vw 0.5vw 0.5vw 0.5vw;
    color: #fff;
    font-weight: 600;
    font-size: 4vh;
`

export const Row = styled.div`
    content: "";
    display: table;
    clear: both;
    width: 100%;
`

export const InputDiv = styled.div`
    position: relative; 
    width: 100%;
    height: 2.6vw;
`

export const SignInInput = styled.input`
    height: 2.6vw;
    display: block;
    box-sizing: border-box;
	border: none;
	border-radius: 10px;
	padding: 12px 15px;
    padding-left: 12%;
	margin-top: 10%;
	width: 100%;
    font-size: 2vh;
    
    &:focus {
        outline: 2px solid #c548ff;
    }
`

export const SignInBtn = styled.button`
    width: 100%;
    height: 3vw;
    margin: 8% 0;
    font-size: 2.5vh;
    border-radius: 4px;
    background: #c548ff;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const SignUpStatement = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 2vh;
`
export const SignUpToggle = styled(Link)`
    padding-left: 2%;
    color: #c548ff;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
    }
`

export const ForgotPassword = styled.a`
    font-size: 1.7vh;
    float: right;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
`

export const ErrorContainer = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 2.5%;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    padding-bottom: 2%;
`

export const BackArrowContainer = styled.div`
    position: absolute;
    top: 12.5%;
    left: 22%;
    width: 10%;
    height: 15%;
    transform: translate(-50%, -50%);
    align-items: center;
    text-align: center;
`

export const ForwardArrowContainer = styled.div`
    position: absolute;
    top: 12.5%;
    left: 79%;
    width: 10%;
    height: 15%;
    transform: translate(-50%, -50%);
    align-items: center;
    text-align: center;
`

export const Line = styled.hr`
    background-color: #c548ff;
    margin: auto; 
    width: ${(props) => props.width};
    height: 5px;
    border: 0.1px solid black;
`

export const BackgroundImg = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.img});
    background-size: cover;
`