import styled from "styled-components";
import * as g from "../global/components"
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

export const MyProjectsTile = ({}) => {
    
    return <g.Split color="#ffcd01" id="projects">
        <g.TopSectionBlock>
                <g.BigTextWrapper id="projectsBT">
                    PROJ
                    {!useMediaQuery({query: '(max-aspect-ratio: 5/3)'}) && <br/>}
                    ECTS
                </g.BigTextWrapper>
        </g.TopSectionBlock>
        <g.BottomSectionBlock>
            <ProjectsTable/>
        </g.BottomSectionBlock>
    </g.Split>
};

const ProjectsTable = ({}) => (
    <g.Table>
        <g.Line/>
        <ProjectRow>
            <g.Link onClick={() => window.open('https://www.secintcorp.com', '_blank')}>
                <b>SecInt</b>
            </g.Link>
            <SmallParagraphText>
                A company site designed and built using a website builder with custom code and styling.
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
        <ProjectRow>
            <g.Link onClick={() => window.open('https://justintaylorweiss.github.io/GameofTwentySquares/', '_blank')}>
                <b>Game of Twenty Squares</b>
            </g.Link>
            <SmallParagraphText>
                An ancient game also known as The Royal Game of Ur made in React.
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
        <ProjectRow>
            <g.Link onClick={() => window.open('https://github.com/JustinTaylorWeiss/Grocery.me', '_blank')}>
                <b>Grocery.me</b>
            </g.Link>
            <SmallParagraphText>
                A grocery web app made using React with Firebase for authentication, hosting, and backend.
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
        <ProjectRow>
            <g.Link onClick={() => window.open(resume, '_blank')}>
                <b>Resume</b>
            </g.Link>
            <SmallParagraphText>
                More information about who I am and what I've done
            </SmallParagraphText>
        </ProjectRow>
        <g.Line/>
    </g.Table>
)
