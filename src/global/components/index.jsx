import styled, { css } from "styled-components";

export const Split = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
    @media only screen and (max-aspect-ratio: 5/3) {
        flex-direction: column;
    }
`;

export const SectionBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: auto;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const BigTextWrapper = styled.div`
    width: 50vw;
    height: 100vh;
    font-weight: 900;
    font-size: 20rem;
    line-height: 18rem;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: 30vh;
        font-size: 13rem;
        line-height: 12rem;
    }
    @media only screen and (max-aspect-ratio: 1/1) {
        width: 100vw;
        height: 25vh;
        font-size: 8rem;
        line-height: 9rem;
    }
    @media only screen and (max-width: 800px) {
        font-size: 6rem;
        line-height: 7rem;
    }
    @media only screen and (max-width: 600px) {
        height: 20vh;
        font-size: 4rem;
        line-height: 5rem;
    }
    @media only screen and (max-width: 425px) {
        height: 15vh;
        font-size: 3rem;
        line-height: 4rem;
    }
    @media only screen and (max-width: 300px) {
        font-size: 2.5rem;
        line-height: 4rem;
    }
    @media only screen and (min-width: 1000px) and (max-height: 700px) {
        font-size: 6rem;
        line-height: 8rem;
    }
    @media only screen and (min-width: 1200px) and (max-height: 825px) {
        font-size: 7rem;
        line-height: 8rem;
    }
`;

export const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    color: black;
    font-size: 2rem;
    :hover {
        color: white;
    }
    @media only screen and (max-width: 600px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 425px) {
        font-size: 1rem;
        font-weight: 600;
    }
    @media only screen and (max-width: 425px) and (max-height: 600px) {
        font-size: 0.8rem;
        font-weight: 600;
    }
    @media only screen and (max-width: 300px) {
        font-size: 0.7rem;
        font-weight: 600;
    }
    @media only screen and (min-width: 1000px) and (max-height: 700px) {
        font-size: 1rem;
        font-weight: 600;
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
        height: 70vh;
        margin: 0;
        padding: 0 5vw 0 5vw;
    }
    @media only screen and (max-aspect-ratio: 1/1) {
        width: 100vw;
        height: 75vh;
        margin: 0;
        padding: 0 5vw 0 5vw;
    }
    @media only screen and (max-width: 600px) {
        width: 100vw;
        height: 80vh;
        margin: 0;
        padding: 0 5vw 0 5vw;
    }
    @media only screen and (max-width: 425px) {
        width: 100vw;
        height: 85vh;
        margin: 0;
        padding: 0 5vw 0 5vw;
    }
    @media only screen and (min-width: 1000px) and (max-height: 700px) {
        width: 50vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
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