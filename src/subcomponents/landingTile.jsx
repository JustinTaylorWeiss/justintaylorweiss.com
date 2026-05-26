import styled, { keyframes } from "styled-components";
import * as g from "../global/components"
import resume from "../assets/resume.pdf";
import { useMediaQuery } from 'react-responsive'
import { ComputerIcon } from "../assets/computerIcon";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-14px); }
`;

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

    span {
        display: block;
        opacity: 0;
        animation: ${fadeUp} 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    span:nth-child(1) { animation-delay: 0.10s; }
    span:nth-child(2) { animation-delay: 0.25s; }
    span:nth-child(3) { animation-delay: 0.40s; }

    @media (prefers-reduced-motion: reduce) {
        span { opacity: 1; animation: none; }
    }

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

const PlacedNameLogo = () => (
    <PlacedLogoTextWrapper>
        <span>JUSTIN</span>
        <span>TAYLOR</span>
        <span>WEISS</span>
    </PlacedLogoTextWrapper>
)

const StyledComputerIcon = styled(ComputerIcon)`
    display: block;
    position: relative;
    margin: 0 auto 0 auto;
    animation: ${float} 6s ease-in-out infinite;
    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
    @media only screen and (max-aspect-ratio: 5/3) {
        width: min(60vw, 80vh);
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        width: min(55vw, 40vh);
    }
`;

const NavTextWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50vw;
    height: 50vh;
    font-size: 1.8rem;
    padding: 40vh 0 0 8vh;
    letter-spacing: 0.16rem;
    font-weight: 600;
    gap: 2vw;
    @media only screen and (max-aspect-ratio: 5/3) {
        width: auto;
        height: auto;
        padding: 0 8vw 0 0;
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        width: 100vw;
        padding: 0 4vw;
        justify-content: center;
        flex-wrap: wrap;
        gap: 6vw;
        font-size: 1rem;
    }
`;

export const LandingTile = () => {

    const isPortrait = useMediaQuery({query: '(max-aspect-ratio: 9/10)'});

    return <g.Split color="#ffcd01">
        <g.HeadTopSectionBlock>
            {
                isPortrait
                ? <PlacedNameLogo/>
                : <g.CenterToRight>
                    <PlacedNameLogo/>
                </g.CenterToRight>
            }
            {
                isPortrait
                ? <NavText/>
                : <g.CenterToLeft>
                    <NavText/>
                </g.CenterToLeft>
            }
        </g.HeadTopSectionBlock>
        <g.HeadBottomSectionBlock>
            <StyledComputerIcon/>
        </g.HeadBottomSectionBlock>
    </g.Split>
};

const NavText = () => (
    <NavTextWrapper>
        <g.Link href="#aboutMe">ABOUT</g.Link>
        <g.Link href="#projects">PROJECTS</g.Link>
        <g.Link href={resume} target="_blank" rel="noopener noreferrer">RESUME</g.Link>
        <g.Link href="#contactMe">CONTACT</g.Link>
    </NavTextWrapper>
)
