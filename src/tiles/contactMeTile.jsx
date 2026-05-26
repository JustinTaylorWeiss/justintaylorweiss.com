import styled from "styled-components";
import * as g from "../global/components"
import { Reveal } from "../global/reveal";
import { useMediaQuery } from 'react-responsive'

const ContactRow = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    :hover {
        transform: translateX(12px);
    }
    @media (prefers-reduced-motion: reduce) {
        transition: none;
        :hover { transform: none; }
    }
    @media only screen and (max-aspect-ratio: 9/10) {
        height: 14vh;
    }

`;

const ContactLink = styled(g.Link)`
    border: none;
    background-color: transparent;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    cursor: pointer;
    @media only screen and (max-aspect-ratio: 9/10) {
        font-size: min(4.5vw, 2.1vh);
    }
`;

export const ContactMeTile = () => {

    return <g.Split color="#2fb0d4" id="contactMe">
        <g.TopSectionBlock>
            <Reveal>
                <g.BigTextWrapper>
                    CONT
                    { !useMediaQuery({query: '(max-aspect-ratio: 5/3)'}) && <br/> }
                    ACT<br/>
                    ME
                </g.BigTextWrapper>
            </Reveal>
        </g.TopSectionBlock>
        <g.BottomSectionBlock>
            <Reveal delay="0.15s">
                <ContactTable/>
            </Reveal>
        </g.BottomSectionBlock>
    </g.Split>
};

const DISCORD_USERNAME = "numeral";

const copyDiscord = () => {
    navigator.clipboard?.writeText(DISCORD_USERNAME);
};

export const ContactTable = () => (
    <g.Table>
        <g.Line/>
        <ContactRow>
            <ContactLink href="mailto:justintaylorweiss@gmail.com">
                justintaylorweiss@gmail.com
            </ContactLink>
            <ContactLink href="mailto:justintaylorweiss@gmail.com">
                Email
            </ContactLink>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <ContactLink href="https://www.linkedin.com/in/justintweiss" target="_blank" rel="noopener noreferrer">
                justintweiss
            </ContactLink>
            <ContactLink href="https://www.linkedin.com/in/justintweiss" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </ContactLink>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <ContactLink href="https://github.com/JustinTaylorWeiss" target="_blank" rel="noopener noreferrer">
                justintaylorweiss
            </ContactLink>
            <ContactLink href="https://github.com/JustinTaylorWeiss" target="_blank" rel="noopener noreferrer">
                GitHub
            </ContactLink>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <ContactLink as="button" type="button" onClick={copyDiscord} title="Copy Discord username">
                {DISCORD_USERNAME}
            </ContactLink>
            <ContactLink as="button" type="button" onClick={copyDiscord} title="Copy Discord username">
                Discord
            </ContactLink>
        </ContactRow>
        <g.Line/>
    </g.Table>
)