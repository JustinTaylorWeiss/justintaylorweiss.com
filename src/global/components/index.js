import styled, { css } from "styled-components";

export const BackgroundWrapper = styled.div`
    scroll-snap-align: start;
    background-color: ${props => props.color};
    width: 100vw;
    height: 100vh;
`;

export const HalfBackgroundWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.color};
    width: 100vw;
    height: 20vh;
`;

export const LogoTextWrapper = styled.div`
    position: absolute;
    top: 6vh;
    left: 6vh;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 10px;
    margin: 0;

    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;

    @media only screen and (max-aspect-ratio: 4/3) {
        position: static;
    }
    @media only screen and (max-width: 900px) {
        font-size: 6rem;
        margin-top: 3vh;
    }
`;

export const InplaceLogoTextWrapper = styled.div`
    padding-left: 5vw;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 10px;
    margin: 0;

    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;

    @media only screen and (min-width: 1200px) and (max-height: 900px) {
        font-size: 1rem;
    }
`;

export const FullViewArt = styled.img`
    position: absolute;
    top: 100vh;
    margin: 0;
    width: 100vw;
    height: 100vh;
`;

export const BigTextWrapper = styled.div`
    font-size: 20rem;
    font-weight: 900;
    line-height: 18rem;

    @media only screen and (max-width: 1100px) {
        font-size: 17rem;
        line-height: 15rem;
    }
    @media only screen and (max-width: 900px) {
        font-size: 15rem;
        line-height: 14rem;
    }
    @media only screen and (max-width: 600px) {
        font-size: 13rem;
        line-height: 12rem;
    }
    @media only screen and (max-width: 300px) {
        font-size: 11rem;
        line-height: 12rem;
    }
    @media only screen and (min-width: 700px) and (max-height: 700px) {
        font-size: 12rem;
        line-height: 11rem;
    }
    @media only screen and (min-width: 900px) and (max-height: 900px) {
        font-size: 11rem;
        line-height: 10rem;
    }
    @media only screen and (min-width: 1200px) and (max-height: 900px) {
        font-size: 9rem;
        line-height: 8rem;
    }
`;

export const SmallTextWrapper = styled.div`
    position: absolute;
    top: 90vh;
    left: 6vh;
    font-size: 1.8rem;
    letter-spacing: 0.16rem;
    font-weight: 600;

    @media only screen and (max-aspect-ratio: 4/3) {
        position: static;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        top: 10vh;
        left: 0;
    }
    @media only screen and (max-width: 900px) {
        visibility: hidden;
        position: static;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100vw;
        top: 10vh;
        left: 0;
    }
`;

export const SnapFlexRow = styled.div`
        display: block;
    @media only screen and (max-aspect-ratio: 4/3) {
        position: absolute;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        top: 10vh;
    }
    @media only screen and (max-width: 900px) {
        position: absolute;
        width: 100vw;
        height: 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        top: 5vh;
    }
`;

export const ListWrap = styled.div`
    position: absolute;
    right: 0;
    transform: translate(0, -50%);
    top: ${props => String(Number(props.level ?? 2) * 100 + 50) + "vh"};
    margin: 5vh 0px;
    width: 50vw;
    font-size: 2rem;
    hr {
        height: 2px;
        border: none;
        background-color: black;
    }

    @media only screen and (max-aspect-ratio: 4/3) {
        width: 80vw;
        transform: translate(50%, 0);
        top: ${props => String(Number(props.level ?? 2) * 100 + 60) + "vh"};
        right: 50vw;
        margin: 0px;
    }  
    @media only screen and (max-width: 1100px) {
        top: ${props => String(Number(props.level ?? 2) * 100 + 50) + "vh"};
    }
`;

export const AlignLeftText = styled.p`
    text-align: left;
    margin-right: 3vw; 
    text-indent: 4ch;
    line-height: 3rem;
    letter-spacing: 0.15rem;
    color: black;
    :hover {
        color: black;
    }
    @media only screen and (max-aspect-ratio: 4/3) {
        margin-right: 0; 
    }
    @media only screen and (max-width: 1100px) {
        font-size: 3rem;
        line-height: 4rem;
    }
    @media only screen and (max-width: 900px) {
        font-size: 3rem;
        line-height: 4rem;
        margin-top: -10vh;
    }
    @media only screen and (max-aspect-ratio: 4/5) {
        font-size: 2rem;
    }
    @media only screen and (max-width: 350px) {
        font-size: 2rem;
    }
    @media only screen and (min-width: 700px) and (max-height: 700px) {
        font-size: 1.5rem;
    }
    @media only screen and (min-width: 900px) and (max-height: 900px) {
        font-size: 1.4rem;
    }
    @media only screen and (min-width: 1200px) and (max-height: 900px) {
        font-size: 0.8rem;
    }
`;

export const AlignSmallLeftText = styled.p`
    text-align: left;
    margin-right: 3vw; 
    text-indent: 4ch;
    line-height: 3rem;
    letter-spacing: 0.15rem;
    color: black;
    :hover {
        color: black;
    }
    @media only screen and (max-aspect-ratio: 4/3) {
        margin-right: 0; 
    }
    @media only screen and (max-width: 900px) {
        font-size: 3rem;
        line-height: 4rem;
    }
`;

export const ListRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: max(2vh, 10px) max(2vw, 10px);
    text-align: left;
`;

export const ListColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: max(2vh, 10px) max(2vw, 10px);
    text-align: left;
`;

export const TextBlockL = styled.div`
    padding: 0.5vh 0;
    width: 20vw;
    letter-spacing: 0.1rem;
    @media only screen and (max-width: 900px) {
        width: 30vw;
    }
`;

export const TextBlockR = styled.div`
    padding: 0.5vh 0;
    font-weight: 600;
    letter-spacing: 0.1rem;
`;

export const WOH = styled.a`
    display: inline-block;
    text-decoration: none;
    color: black;
    :hover {
        color: white;
    }
    @media only screen and (max-width: 900px) {
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 350px) {
        font-size: 2rem;
    }
`;

export const ResumeLink = styled.a`
    visibility: hidden;
    position: absolute;
    display: block;
    text-decoration: none;
    color: black;
    :hover {
        color: white;
    }
    @media only screen and (max-width: 900px) {
        position: static;
        visibility: visible;
        text-align: center;
        font-size: 3rem;
        line-height: 8rem;
    }
`;
