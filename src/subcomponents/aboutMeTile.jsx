import styled from "styled-components";
import * as g from "../global/components"

const ParagraphText = styled.p`
    text-align: left;
    margin: 0 3vw 0 2vw;
    color: black;
    font-size: 2rem;
    line-height: 3.5rem;
    letter-spacing: 0.2rem;
    padding: 6vh 0 0 0;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 100vw;
        height: 70vh;
        margin: 0;
        padding: 10vh 5vw 0 5vw;
    }
    @media only screen and (max-aspect-ratio: 1/1) {
        width: 100vw;
        height: 75vh;
        margin: 0;
        padding: 6vh 10vw 0 10vw;
        font-size: 1.5rem;
        line-height: 3rem;
        letter-spacing: 0.15rem;
    }
    @media only screen and (max-height: 1200px) {
        padding: 20vh 5vw 0 5vw;
        font-size: 1.2rem;
        line-height: 2.5rem;
        letter-spacing: 0.05rem;
    }
    @media only screen and (max-width: 600px) {
        height: 80vh;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.05rem;
    }
    @media only screen and (max-width: 425px) {
        height: 85vh;
        padding: 6vh 10vw 0 10vw;
        font-size: 1rem;
        line-height: 1.8rem;
        letter-spacing: 0.1rem;
    }
    @media only screen and (min-aspect-ratio: 5/2) {
        padding: 0 5vw 0 5vw;
        font-size: 1.2rem;
        line-height: 2.5rem;
        letter-spacing: 0.05rem;
    }
    @media only screen and (max-width: 425px) and (max-height: 700px) {
        padding: 8vh 10vw 0 10vw;
        font-size: 0.9rem;
        line-height: 1.5rem;
        letter-spacing: 0.08rem;
    }
    @media only screen and (max-width: 425px) and (max-height: 600px) {
        padding: 11vh 10vw 0 10vw;
        font-size: 0.75rem;
        line-height: 1.3rem;
        letter-spacing: 0.09rem;
    }
    @media only screen and (max-width: 300px) {
        padding: 10vh 10vw 0 10vw;
        font-size: 0.75rem;
        line-height: 1.3rem;
        letter-spacing: 0.1rem;
    }
    @media only screen and (min-width: 1000px) and (max-height: 700px) {
        width: 50vw;
        height: 100vh;
        padding: 20vh 0 0 3vw;
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: 0.2rem;
    }
    @media only screen and (min-width: 700px) and (max-height: 400px) {
        width: 50vw;
        height: 100vh;
        padding: 20vh 3vw 20vh 3vw;
        font-size: 0.6rem;
        line-height: 1.2rem;
        letter-spacing: 0.15rem;
    }
`;

export const AboutMeTile = ({}) => (
    <g.Split color="#ee1cc0" id="aboutMe">
        <g.SectionBlock>
            <g.BigTextWrapper>
                ABOUT<br/>
                ME
            </g.BigTextWrapper>
        </g.SectionBlock>
        <g.SectionBlock>
            <ParagraphText>
                I'm a graduate of Farmingdale State College with a Bachelor of Science in Computer Science and Information Systems with a minor in Sociology.
                My interest in programming began when my brother showed me SpriteKit when I was 14.
                Through creating my first game I learned to love the idea of creating something that could be experienced by people all over the world.
                This drew me toward web development.
                Now I have a focus in React and Redux, as well as game development.
                When I’m not making websites, I like to make or play video games.
                Feel free to check out some of my projects or my GitHub page listed below.
            </ParagraphText>
        </g.SectionBlock>
    </g.Split>
);
