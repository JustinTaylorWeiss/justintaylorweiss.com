import styled from "styled-components";
import * as g from "../global/components"

const ParagraphText = styled.p`
    display: block;
    text-align: left;
    white-space: normal;
    margin: 0 3vw 0 2vw;
    color: black;
    font-size: min(2.75vh, 1.5vw);
    line-height: 2em;
    letter-spacing: 0.1em;
    @media only screen and (max-aspect-ratio: 5/3) {
        font-size: min(2.1vw, 2.4vh);
        padding: 0 5vw;
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        font-size: min(4vw, 1.85vh);
        padding: 0 5vw;
    }
    @media (width: 450px) {
        font-size: min(4vw, 1.85vh);
        padding: 0 5vw;
    }
`;

export const AboutMeTile = ({}) => (
    <g.Split color="#ee1cc0" id="aboutMe">
        <g.TopSectionBlock>
            <g.BigTextWrapper>
                ABOUT<br/>
                ME
            </g.BigTextWrapper>
        </g.TopSectionBlock>
        <g.BottomSectionBlock>
            <ParagraphText>
                I'm a graduate of Farmingdale State College with a Bachelor of Science in Computer Science and Information Systems with a minor in Sociology.
                My interest in programming began when my brother showed me SpriteKit when I was 14.
                Through creating my first game I learned to love the idea of creating something that could be experienced by people all over the world.
                This drew me toward web development.
                Now I have a focus in React and Redux, as well as game development.
                When I’m not making websites, I like to make or play video games.
                Feel free to check out some of my projects or my GitHub page listed below.
            </ParagraphText>
        </g.BottomSectionBlock>
    </g.Split>
);
