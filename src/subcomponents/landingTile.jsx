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
    font-size: 2rem;
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
        height: 20vh;
        padding: 4vh 0 4vh 8vw;
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        padding: 0;
        font-size: min(10vw, 4.6vh);
        margin: 0 auto 0 auto;
        text-align: center;
    }
`;

//font-size: 10vw;
//font-size: 4.5vh;

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

export const LandingTile = ({}) => {

    const apectRatio = useMediaQuery({query: '(max-aspect-ratio: 2/3)'});
    const minWidth =  useMediaQuery({query: '(min-width: 700px)'});
    const maxHeight = useMediaQuery({query: '(max-height: 400px)'});

    return <g.Split color="#ffcd01">
        <g.HeadTopSectionBlock>
            <PlacedNameLogo/>
            {
                !useMediaQuery({query: '(max-aspect-ratio: 9/10)'})
                && <NavText/>
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