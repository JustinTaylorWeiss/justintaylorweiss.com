import styled from "styled-components";
import * as g from "../global/components"
import resume from "../assets/resume.pdf";
import { ComputerIcon } from "../assets/computerIcon";
import { PlacedNameLogo } from "./nameLogo";

const StyledComputerIcon = styled(ComputerIcon)`
    position: absolute;
    right: 10%;
    margin: 5vh 0px;
    width: 90vh;
    height: 90vh;
`;

const scrollToElementWithID = (id) => {
    document.getElementById(id)?.scrollIntoView();
}

export const LandingTile = ({}) => (
    <g.BackgroundWrapper color="#ffcd01">
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
        <StyledComputerIcon/>
    </g.BackgroundWrapper>
);
