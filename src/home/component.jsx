import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";
import projectIcon from "./assets/projectIcon.svg";
import amazin from "./assets/amazin.svg";

const BackgroundWrapper = styled.div`
    background-color: ${props => props.color};
    width: 100vw;
    height: 100vh;
`;

const StyledProjectIcon = styled.img`
    position: absolute;
    right: 15%;
    margin: 5vh 0px;
    width: 80vh;
    height: 80vh;
`;

const FullViewArt = styled.img`
    position: absolute;
    top: 100vh;
    margin: 0;
    width: 100vw;
    height: 100vh;
`;

const BigTextWrapper = styled.div`
    font-size: 20rem;
    font-family: Arial, sans-serif;
    font-weight: 900;
    line-height: 18rem;
`;

const SmallTextWrapper = styled.div`
    position: absolute;
    top: 90vh;
    left: 6vh;
    font-size: 1.8rem;
    font-family: Arial, sans-serif;
    font-weight: 50;
`;

const LogoTextWrapper = styled.div`
    position: absolute;
    top: 6vh;
    left: 6vh;
    font-size: 2rem;
    font-family: Arial, sans-serif;
    font-weight: 800;
    letter-spacing: 10px;
    margin: 0;

    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
`;

const ListWrap = styled.div`
    position: absolute;
    text-align: center;
    right: 0;
    transform: translate(0, -50%);
    top: 250vh;
    margin: 5vh 0px;
    width: 50vw;
    hr {
        height: 2px;
        border: none;
        background-color: black;
    }
`;

const ListRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 2vh 2vw;
    text-align: left;
`;

const TextBlockL = styled.div`
    width: 20vw;
`;

const TextBlockR = styled.div`
    width: 2vw;
`;


export const Home = ({updatePage}) => {

  return <>
    <BackgroundWrapper color="#ffcc00">
        <LogoTextWrapper>
            JUSTIN<br/>
            TAYLOR<br/>
            WEISS<br/>
            .COM
        </LogoTextWrapper>
        <SmallTextWrapper>
            Programming
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            Game Design
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            Graphic Design
        </SmallTextWrapper>
        <StyledProjectIcon src={projectIcon} alt="projectIcon"/>
    </BackgroundWrapper>
    <BackgroundWrapper color="#ee1cc0">
        <FullViewArt src={amazin} alt="amazin"/>
    </BackgroundWrapper>
    <BackgroundWrapper color="#ffcc00">
        <BigTextWrapper>
            CONT<br/>
            ACT<br/>
            ME
        </BigTextWrapper>
        <ListWrap>
            <hr/>
            <ListRow>
                <TextBlockL>Justintaylorweiss@gmail.com</TextBlockL><TextBlockR>Email</TextBlockR>
            </ListRow>
            <hr/>
            <ListRow>
                <TextBlockL>Justin-Taylor-Weiss</TextBlockL><TextBlockR>LinkedIn</TextBlockR>
            </ListRow>
            <hr/>
            <ListRow>
                <TextBlockL>JustinTaylorWeiss</TextBlockL><TextBlockR>GitHub</TextBlockR>
            </ListRow>
            <hr/>
            <ListRow>
                <TextBlockL>Numeral#3694</TextBlockL><TextBlockR>Discord</TextBlockR>
            </ListRow>
            <hr/>
        </ListWrap>
    </BackgroundWrapper>
  </>
}
