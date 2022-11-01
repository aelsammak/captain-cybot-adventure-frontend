import styled from "styled-components";

export const BackgroundImg = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

export const GetStartedBtn = styled.button`
    width: 20%;
    font-size: 28px;
    font-weight: 500;
    position: relative;
    top: 695px;
    left: 390px;
    border-radius: 4px;
    background: #7A63FF;
    padding: 15px 60px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`