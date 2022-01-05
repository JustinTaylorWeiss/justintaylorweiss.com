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
`;

export const SmallTextWrapper = styled.div`
    position: absolute;
    top: 90vh;
    left: 6vh;
    font-size: 1.8rem;
    letter-spacing: 0.135em;
    font-weight: 600;
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
`;

export const AlignLeftText = styled.p`
    text-align: left;
    margin-right: 3vw; 
    text-indent: 4ch;
    line-height: 1.5em;
    letter-spacing: 0.075em;
    color: black;
    :hover {
        color: black;
    }
`;

export const ListRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 2vh 2vw;
    text-align: left;
`;

export const ListColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 2vh 2vw;
    text-align: left;
`;

export const TextBlockL = styled.div`
    padding: 0.5vh 0;
    width: 20vw;
    letter-spacing: 0.05em;
`;

export const TextBlockR = styled.div`
    padding: 0.5vh 0;
    font-weight: 600;
    width: 5vw;
    letter-spacing: 0.05em;
`;

export const WOH = styled.a`
    display: inline-block;
    text-decoration: none;
    color: black;
    :hover {
        color: white;
    }
`;

