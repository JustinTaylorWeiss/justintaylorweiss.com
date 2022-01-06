import styled from "styled-components";
import * as g from "../global/components"
import resume from "../assets/resume.pdf";
import { useMediaQuery } from 'react-responsive'
import { ComputerIcon } from "../assets/computerIcon";


const PlacedLogoTextWrapper = styled.div`
    width: 50vw;
    height: 50vh;
    padding: 8vh 0 0 8vh;
    font-weight: 800;
    font-size: 2rem;
    letter-spacing: 0.65rem;

    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
    
    @media only screen and (max-aspect-ratio: 5/3) {
        width: auto;
        height: 20vh;
        padding: 4vh 0 4vh 8vw;
    }
    @media only screen and (max-aspect-ratio: 1/1) {
        padding: 0;
        height: 50vh;
        font-size: 5rem;
        letter-spacing: 1.5rem;
        padding: 10vh 0 10vh 0;
        margin: 0 auto 0 auto;
        text-align: center;
    }
    @media only screen and (max-width: 600px) {
        font-size: 2.5rem;
        letter-spacing: 1.2rem;
        padding: 10vh 0 10vh 0;
        margin: 0 auto 0 auto;
        text-align: center;
    }
    @media only screen and (max-width: 365px) {
        font-size: 1.8rem;
        letter-spacing: 1rem;
        padding: 10vh 0 10vh 0;
        margin: 0 auto 0 auto;
        text-align: center;
    }
`;

const PlacedNameLogo = ({}) => (
    <PlacedLogoTextWrapper>
        JUSTIN<br/>
        TAYLOR<br/>
        WEISS
    </PlacedLogoTextWrapper>
)

const StyledComputerIcon = styled(ComputerIcon)`
    display: block;
    position: relative;
    margin: 0 auto 0 auto;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: 80vh;
    }
    @media only screen and (max-aspect-ratio: 1/1) {
        width: 50vh;
    }
`;

const NavTextWrapper = styled.div`
    width: 50vw;
    height: 50vh;
    padding: 40vh 0 0 8vh;
    font-size: 1.8rem;
    letter-spacing: 0.16rem;
    font-weight: 600;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: auto;
        height: 20vh;
        padding: 9vh 8vw 9vh 0;
    }
`;

const scrollToElementWithID = (id) => {
    document.getElementById(id)?.scrollIntoView();
}

export const LandingTile = ({}) => (
    <g.Split color="#ffcd01">
        <g.SectionBlock>
            <PlacedNameLogo/>
            {!useMediaQuery({query: '(max-aspect-ratio: 1/1)'}) && <NavText/>}
        </g.SectionBlock>
        <g.SectionBlock>
            <StyledComputerIcon/>
        </g.SectionBlock>
    </g.Split>
);

const NavText = ({}) => (
    <NavTextWrapper>
        <g.Link onClick={() => scrollToElementWithID("aboutMe")}>
            ABOUT
        </g.Link>
        <g.Spacer vw="2"/>
        <g.Link onClick={() => scrollToElementWithID("projects")}>
            PROJECTS
        </g.Link>
        <g.Spacer vw="2"/>
        <g.Link onClick={() => window.open(resume, "_blank")}>
            RESUME
        </g.Link>
        <g.Spacer vw="2"/>
        <g.Link onClick={() => scrollToElementWithID("contactMe")}>
            CONTACT
        </g.Link>
    </NavTextWrapper>
)