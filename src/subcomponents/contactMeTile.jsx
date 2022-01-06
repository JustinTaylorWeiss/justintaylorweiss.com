import styled from "styled-components";
import * as g from "../global/components"
import { useMediaQuery } from 'react-responsive'

const ContactRow = styled.div`
    width: 90%;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    @media only screen and (max-width: 800px) {
        height: 12vh;
    }
    @media only screen and (min-width: 1000px) and (max-height: 700px) {
        height: 13vh;
    }
    @media only screen and (min-width: 700px) and (max-height: 400px) {
        height: 15vh;
    }
`;

export const ContactMeTile = ({}) => (
    <g.Split color="#2fb0d4" id="contactMe">
        <g.SectionBlock>
            <g.BigTextWrapper>
                CONT
                {!useMediaQuery({query: '(max-aspect-ratio: 5/3)'}) && <br/>}
                ACT<br/>
                ME
            </g.BigTextWrapper>
        </g.SectionBlock>
        <g.SectionBlock>
            <ContactTable/>
        </g.SectionBlock>
    </g.Split>
);

export const ContactTable = ({}) => (
    <g.Table>
        <g.Line/>
        <ContactRow>
            <g.Link onClick={() => window.open('mailto:justintaylorweiss@gmail.com')}>
                justintaylorweiss@gmail.com
            </g.Link>
            <g.Link onClick={() => window.open('mailto:justintaylorweiss@gmail.com')}>
                Email
            </g.Link>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <g.Link onClick={() => window.open("https://www.linkedin.com/in/justin-taylor-weiss", "_blank")}>
                justin-taylor-weiss
            </g.Link>
            <g.Link onClick={() => window.open("https://www.linkedin.com/in/justin-taylor-weiss", "_blank")}>
                LinkedIn
            </g.Link>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <g.Link onClick={() => window.open("https://github.com/JustinTaylorWeiss", "_blank")}>
                justintaylorweiss
            </g.Link>
            <g.Link onClick={() => window.open("https://github.com/JustinTaylorWeiss", "_blank")}>
                GitHub
            </g.Link>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <g.Link>
                numeral#3694
            </g.Link>
            <g.Link>
                Discord
            </g.Link>
        </ContactRow>
        <g.Line/>
    </g.Table>
)