import styled from "styled-components";
import * as g from "../global/components"
import { Reveal } from "../global/reveal";

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

export const AboutMeTile = () => (
    <g.Split color="#ee1cc0" id="aboutMe">
        <g.TopSectionBlock>
            <Reveal>
                <g.BigTextWrapper>
                    ABOUT<br/>
                    ME
                </g.BigTextWrapper>
            </Reveal>
        </g.TopSectionBlock>
        <g.BottomSectionBlock>
            <Reveal delay="0.15s">
                <ParagraphText>
                    I'm a full stack developer based in New York.
                    I work mostly with React on the front end, and lately I've been building AI-powered tools at Blurbs.
                    I studied Computer Programming and Information Systems at Farmingdale State College, with a minor in Sociology, and recently earned a certificate in designing AI products through MIT xPro.
                    I do my best work bridging the business and engineering sides of a project — turning what people need into products that actually deliver it.
                    Take a look at some of my projects or my GitHub below.
                </ParagraphText>
            </Reveal>
        </g.BottomSectionBlock>
    </g.Split>
);
