import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const SignUpContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    width: 30%;
    height: 59%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    background: #000A;
    align-items: center;
    text-align: center;
    margin-top: 4%;
    padding: 2% 3% 35% 3%;
    border: 3px solid white;
`

export const SignUpText = styled.h1`
    padding-bottom: 3.5%;
    color: #fff;
    font-weight: 600;
`

export const InputDiv = styled.div`
    position: relative; 
    width: 100%;
`

export const SignUpInput = styled.input`
    display: block;
    box-sizing: border-box;
	border: none;
	border-radius: 10px;
	padding: 12px 15px;
    padding-left: 37.5px;
	margin-top: 30px;
	width: 100%;
    font-size: 0.8rem;
    
    &:focus {
        outline: 2px solid #c548ff;
    }
`

export const SignUpBtn = styled.button`
    margin-top: 5px;
    margin-bottom: 25px;
    padding: 12px 50px;
    width: 100%;
    display: inline-block;
    font-size: 18px;
    border-radius: 4px;
    background: #c548ff;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const SignInStatement = styled.p`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`

export const SignInToggle = styled(Link)`
    padding-left: 2%;
    color: #c548ff;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
    }
`

export const ErrorContainer = styled.div`
    padding-top: 3.5%;
    height: 100%;
    width: 100%;
    text-align: center;
    padding-bottom: 3.5%;
`
export const Error = styled.p`
    color: red;
    font-size: 12px;
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