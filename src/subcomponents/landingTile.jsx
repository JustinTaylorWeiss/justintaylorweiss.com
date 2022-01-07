import styled from "styled-components";
import * as g from "../global/components"
import resume from "../assets/resume.pdf";
import { useMediaQuery } from 'react-responsive'
import { ComputerIcon } from "../assets/computerIcon";


const PlacedLogoTextWrapper = styled.h1`
    display: block;
    margin: 0;
    width: 50vw;
    height: 50vh;
    padding: 8vh 0 0 8vh;
    font-weight: 900;
    font-size: min(2.1vw, 4.85vh);
    letter-spacing: 0.35em;
    line-height: 1.40em;

    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;

    @media only screen and (max-aspect-ratio: 5/3) {
        width: auto;
        height: auto;
        padding: 0 0 0 8vw;
    }
    @media only screen and (max-aspect-ratio: 9/10){
        padding: 0;
        font-size: min(10vw, 4.6vh);
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
        width: min(60vw, 80vh);
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        width: min(55vw, 40vh);
    }
`;

const NavTextWrapper = styled.div`
    width: 50vw;
    height: 50vh;
    font-size: 1.8rem;
    padding: 40vh 0 0 8vh;
    letter-spacing: 0.16rem;
    font-weight: 600;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: auto;
        height: auto;
        padding: 0 8vw 0 0;
    }
`;

const scrollToElementWithID = (id) => {
    document.getElementById(id)?.scrollIntoView();
}

export const LandingTile = ({}) => {

    return <g.Split color="#ffcd01">
        <g.HeadTopSectionBlock>
            {
                useMediaQuery({query: '(max-aspect-ratio: 9/10)'})
                ? <PlacedNameLogo/>
                : <g.CenterToRight>
                    <PlacedNameLogo/>
                </g.CenterToRight>
            }
            {
                !useMediaQuery({query: '(max-aspect-ratio: 9/10)'})
                && <g.CenterToLeft>
                    <NavText/>
                </g.CenterToLeft>
            }
        </g.HeadTopSectionBlock>
        <g.HeadBottomSectionBlock>
            <StyledComputerIcon/>
        </g.HeadBottomSectionBlock>
    </g.Split>
};

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