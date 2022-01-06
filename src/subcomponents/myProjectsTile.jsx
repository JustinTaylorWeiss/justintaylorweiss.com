import styled from "styled-components";
import * as g from "../global/components"
import resume from "../assets/resume.pdf";
import { useMediaQuery } from 'react-responsive'

const ProjectRow = styled.div`
    width: 90%;
    height: 15vh;
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    @media only screen and (max-width: 800px) {
        height: 20vh;
    }
`;

const SmallParagraphText = styled.p`
    line-height: 2rem;
    letter-spacing: 0.15rem;
    font-size: 1.5rem;
    @media only screen and (max-width: 600px) {
        line-height: 1.9rem;
        letter-spacing: 0.1rem;
        font-size: 1.3rem;
    }
    @media only screen and (max-width: 425px) {
        line-height: 1.6rem;
        letter-spacing: 0.08rem;
        font-size: 1.1rem;
    }
    @media only screen and (max-width: 425px) and (max-height: 700px) {
        line-height: 1.4rem;
        letter-spacing: 0.07rem;
        font-size: 1rem;
    }
    @media only screen and (max-width: 425px) and (max-height: 600px) {
        line-height: 1.3rem;
        letter-spacing: 0.05rem;
        font-size: 0.8rem;
    }
    @media only screen and (max-width: 300px) {
        line-height: 1.3rem;
        letter-spacing: 0.05rem;
        font-size: 0.75rem;
    }
    @media only screen and (min-width: 1000px) and (max-height: 700px) {
        line-height: 1.3rem;
        letter-spacing: 0.08rem;
        font-size: 1rem;
    }
`;

export const MyProjectsTile = ({}) => (
    <g.Split color="#ffcd01" id="projects">
        <g.SectionBlock>
            <g.BigTextWrapper>
                PROJ
                {!useMediaQuery({query: '(max-aspect-ratio: 5/3)'}) && <br/>}
                ECTS
            </g.BigTextWrapper>
        </g.SectionBlock>
        <g.SectionBlock>
            <ProjectsTable/>
        </g.SectionBlock>
    </g.Split>
);

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
