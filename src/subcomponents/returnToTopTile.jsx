import styled from "styled-components";
import { UpArrow } from "../assets/upArrow";

const SmallBackgroundWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    width: 100vw;
    height: 20vh;
`;

const LogoTextWrapper = styled.div`
    position: static;
    padding-left: 5vw;
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: 10px;
    margin: 0;

    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;

    @media only screen and (max-width: 1000px) {
        font-size: 1.2rem;
        letter-spacing: 0.5rem;
        text-align: center;
    }
    @media only screen and (min-width: 1000px) and (max-height: 700px) {
        font-size: 1.2rem;
        letter-spacing: 0.5rem;
        text-align: center;
    }
`;

const NameLogo = ({}) => (
    <LogoTextWrapper>
        JUSTIN<br/>
        TAYLOR<br/>
        WEISS
    </LogoTextWrapper>
)

const StyledUpArrow = styled(UpArrow)`
    margin-right: 5vw;
    display: block;
    height: 10vh;
    width: 10vh;
    :hover {
        fill: #FFFFFF
    }
`;

export const ReturnToTopTile = ({}) => <>
    <SmallBackgroundWrapper color="#ee1cc0">
        <NameLogo/>
        <StyledUpArrow onClick={() => window.document.body.scrollIntoView()}/>
    </SmallBackgroundWrapper>
</>
