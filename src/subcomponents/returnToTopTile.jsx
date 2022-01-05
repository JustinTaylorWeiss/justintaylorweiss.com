import styled from "styled-components";
import * as g from "../global/components";
import { UpArrow } from "../assets/upArrow";
import { InplaceNameLogo } from "./nameLogo";

const StyledUpArrow = styled(UpArrow)`
    padding-right: 5vw;
    display: block;
    width: 12vh;
    height: 12vh;
    :hover {
        fill: #FFFFFF
    }
`;

export const ReturnToTopTile = ({}) => (
    <g.HalfBackgroundWrapper color="#ee1cc0">
        <InplaceNameLogo/>
        <StyledUpArrow onClick={() => window.document.body.scrollIntoView()}/>
    </g.HalfBackgroundWrapper>
);
