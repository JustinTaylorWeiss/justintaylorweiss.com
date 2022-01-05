import styled from "styled-components";
import * as g from "../global/components";
import { UpArrow } from "../assets/upArrow";
import { InplaceNameLogo } from "./nameLogo";

const StyledUpArrow = styled(UpArrow)`
    padding-right: 5vw;
    display: block;
    width: 18rem;
    height: 18rem;
    :hover {
        fill: #FFFFFF
    }
    @media only screen and (min-width: 700px) and (max-height: 700px) {
        width: 13rem;
        height: 13rem;
    }
    @media only screen and (min-width: 900px) and (max-height: 900px) {
        width: 13rem;
        height: 13rem;
    }
    @media only screen and (min-width: 1200px) and (max-height: 900px) {
        width: 9rem;
        height: 9rem;
    }
`;

export const ReturnToTopTile = ({}) => (
    <g.HalfBackgroundWrapper color="#ee1cc0">
        <InplaceNameLogo/>
        <StyledUpArrow onClick={() => window.document.body.scrollIntoView()}/>
    </g.HalfBackgroundWrapper>
);
