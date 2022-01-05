import styled from "styled-components";
import * as g from "../global/components"
import resume from "../assets/resume.pdf";
import { ComputerIcon } from "../assets/computerIcon";
import { PlacedNameLogo } from "./nameLogo";

const StyledComputerIcon = styled(ComputerIcon)`
    position: absolute;
    right: 10%;
    margin: 5vh 0px;
    width: 66rem;
    height: 66rem;
    @media only screen and (max-aspect-ratio: 5/3) {
        transform: translate(0, -50%);
        top: 40%;
        width: 80rem;
        height: 80rem;
    }
    @media only screen and (max-aspect-ratio: 3/2) {
        transform: translate(0, -50%);
        top: 40%;
        width: 90rem;
        height: 90rem;
    }
    @media only screen and (max-aspect-ratio: 4/3) {
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        width: 80rem;
        height: 80rem;
    }
    @media only screen and (max-height: 1100px) {
        width: 50rem;
        height: 50rem;
    }
    @media only screen and (max-width: 1100px) {
        width: 50rem;
        height: 50rem;
    }
    @media only screen and (max-width: 900px) {
        margin-top: 15vh;
        width: 60rem;
        height: 60rem;
    }
    @media only screen and (max-width: 300px) {
        width: 50rem;
        height: 50rem;
    }
    @media only screen and (min-width: 1500px) and (max-height: 900px) {
        width: 30rem;
        height: 30rem;
    }
    @media only screen and (min-width: 900px) and (max-height: 900px) {
        width: 50rem;
        height: 50rem;
    }
    @media only screen and (min-width: 700px) and (max-height: 700px) {
        width: 50rem;
        height: 50rem;
    }
    @media only screen and (min-width: 700px) and (max-height: 500px) {
        width: 30rem;
        height: 30rem;
    }
    @media only screen and (min-width: 1200px) and (max-height: 900px) {
        width: 20rem;
        height: 20rem;
    }


`;

const scrollToElementWithID = (id) => {
    document.getElementById(id)?.scrollIntoView();
}

export const LandingTile = ({}) => (
    <g.BackgroundWrapper color="#ffcd01">
        <g.SnapFlexRow>
            <PlacedNameLogo/>
            <g.SmallTextWrapper>
                <g.WOH onClick={() => scrollToElementWithID("aboutMe")}>
                    ABOUT
                </g.WOH>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <g.WOH onClick={() => scrollToElementWithID("contactMe")}>
                    CONTACT
                </g.WOH>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <g.WOH onClick={() => scrollToElementWithID("projects")}>
                    PROJECTS
                </g.WOH>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <g.WOH onClick={() => window.open(resume, "_blank")}>
                    RESUME
                </g.WOH>
            </g.SmallTextWrapper>
        </g.SnapFlexRow>
        <StyledComputerIcon/>
    </g.BackgroundWrapper>
);
