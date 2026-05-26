import styled from "styled-components";
import * as g from "../global/components"
import { Reveal } from "../global/reveal";
import resume from "../assets/resume.pdf";
import { useMediaQuery } from 'react-responsive'
import React from "react";

const ProjectRow = styled.div`
    width: 90%;
    height: 14vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    text-align: left;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    :hover {
        transform: translateX(12px);
    }
    @media (prefers-reduced-motion: reduce) {
        transition: none;
        :hover { transform: none; }
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        height: 15vh;
    }
`;

const SmallParagraphText = styled.p`
    margin: 0;
    font-size: min(2.75vh, 1.5vw);
    letter-spacing: 0.075em;
    @media only screen and (max-aspect-ratio: 5/3) {
        font-size: min(2.1vw, 2.4vh);
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        font-size: min(4vw, 1.85vh);
    }
`;

export const MyProjectsTile = () => {
    
    return <g.Split color="#ffcd01" id="projects">
        <g.TopSectionBlock>
            <Reveal>
                <g.BigTextWrapper id="projectsBT">
                    PROJ
                    {!useMediaQuery({query: '(max-aspect-ratio: 5/3)'}) && <br/>}
                    ECTS
                </g.BigTextWrapper>
            </Reveal>
        </g.TopSectionBlock>
        <g.BottomSectionBlock>
            <Reveal delay="0.15s">
                <ProjectsTable/>
            </Reveal>
        </g.BottomSectionBlock>
    </g.Split>
};

const ProjectsTable = () => (
    <g.Table>
        <g.Line/>
        <ProjectRow>
            <g.Link href="https://trustblurbs.com" target="_blank" rel="noopener noreferrer">
                <b>Trustblurbs.com</b>
            </g.Link>
            <SmallParagraphText>
                An AI-Powered MarTech Discovery Platform.
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
        <ProjectRow>
            <g.Link href="https://floatmana.app/" target="_blank" rel="noopener noreferrer">
                <b>Floatmana.app</b>
            </g.Link>
            <SmallParagraphText>
                A Magic The Gathering land base builder with all the power of Scryfall.
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
        <ProjectRow>
            <g.Link href="https://langlanguage.com" target="_blank" rel="noopener noreferrer">
                <b>LangLanguage.com</b>
            </g.Link>
            <SmallParagraphText>
                A site for learning the Lang pseudo language.
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
        <ProjectRow>
            <g.Link href={resume} target="_blank" rel="noopener noreferrer">
                <b>Resume</b>
            </g.Link>
            <SmallParagraphText>
                More information about who I am and what I've done.
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
    </g.Table>
)


/*


*/