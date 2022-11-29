import {BackgroundImg, Line, TitleContainer, MenuText, MenuBtn, ButtonsContainer, NameContainer, NameText,NameDescription} from "./MenuElements";
import background from "../../images/Worlds_Background.png"
import AccountIcon from '@mui/icons-material/AccountCircle';
import './../../App.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <BackgroundImg img={background} >
            <NameContainer>
                <NameDescription>
                    <AccountIcon style={{width:"4%", height: "5%", fill:"white"}}></AccountIcon>
                    <NameText>WELCOME {localStorage.getItem("username").toUpperCase()}</NameText>
                </NameDescription>
            </NameContainer>
            <TitleContainer>
                <MenuText>CAPTAIN CYBOT'S ADVENTURE</MenuText>
                <Line/>
            </TitleContainer>
            <ButtonsContainer>
                <Link to="/worlds">
                    <MenuBtn  style={{backgroundColor:"#c548ff"}}>START</MenuBtn>
                </Link>
                <MenuBtn style={{backgroundColor:"#ff1515"}}>CUSTOMIZATION</MenuBtn>
                <MenuBtn style={{backgroundColor:"#15e1ff"}}>LEADERBOARD</MenuBtn>
                <MenuBtn style={{backgroundColor:"#ffe715"}}>ABOUT</MenuBtn>
            </ButtonsContainer>
        </BackgroundImg>
    );
}

export default Menu;
