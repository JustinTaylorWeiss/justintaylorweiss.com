import styled from "styled-components";

export const Split = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    @media only screen and (max-aspect-ratio: 5/3) {
        flex-direction: column;
    }
`;

const SectionBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
`;

export const HeadTopSectionBlock = styled(SectionBlock)`
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: 20vh;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        height: 35vh;
    }
    @media (width: 450px) {
        height: 35vh;
    }
`;

export const HeadBottomSectionBlock = styled(SectionBlock)`
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: 80vh;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        height: 65vh;
    }
    @media (width: 450px) {
        height: 65vh;
    }
`;

export const TopSectionBlock = styled(SectionBlock)`
    justify-content: flex-start;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: 40vh;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        height: 25vh;
    }
    @media (width: 450px) {
        height: 25vh;
    }
`;

export const BottomSectionBlock = styled(SectionBlock)`
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: 60vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        height: 75vh;
    }
    @media (width: 450px) {
        height: 75vh;
    }
`;

export const BigTextWrapper = styled.h2`
    display: block;
    margin: 0;
    width: 50vw;
    font-weight: 900;
    font-size: min(11vw, 20.5vh);
    line-height: 1.1em;
    letter-spacing: 0.05em;
    padding-left: 3vw;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: auto;
        font-size: min(14vw, 18vh);
    }
`;

export const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    color: black;
    font-size: min(2.6vh, 1.8vw);
    :hover {
        color: white;
        cursor: pointer;
    }
    @media only screen and (max-aspect-ratio: 5/3) {
        font-size: min(2.6vh, 1.8vw);
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        font-size: min(5.7vw, 2.65vh);
    }
`;


export const Table = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 10vh 0 10vh 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: auto;
        margin: 0;
        padding: 0 5vw 0 5vw;
    }
`;

export const CenterToLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const CenterToRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const Line = styled.div`
    width: 100%;
    text-align: center;
    border-bottom: solid 2px #000000;
`;

export const Spacer = styled.div`
    display: inline-block;
    width: ${props => String(Number(props.vw) + "vw")};
    height: ${props => String(Number(props.vh) + "vh")};
`;