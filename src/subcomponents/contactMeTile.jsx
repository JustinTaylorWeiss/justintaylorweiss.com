import styled from "styled-components";
import * as g from "../global/components"
import { useMediaQuery } from 'react-responsive'

const ContactRow = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    @media only screen and (max-aspect-ratio: 9/10) {
        height: 14vh;
    }
    
`;

const ContactLink = styled(g.Link)`
    @media only screen and (max-aspect-ratio: 9/10) {
        font-size: min(4.5vw, 2.1vh);
    }
`;

export const ContactMeTile = ({}) => {

    return <g.Split color="#2fb0d4" id="contactMe">
        <g.TopSectionBlock>
            <g.BigTextWrapper>
                CONT
                { !useMediaQuery({query: '(max-aspect-ratio: 5/3)'}) && <br/> }
                ACT<br/>
                ME
            </g.BigTextWrapper>
        </g.TopSectionBlock>
        <g.BottomSectionBlock>
            <ContactTable/>
        </g.BottomSectionBlock>
    </g.Split>
};

export const ContactTable = ({}) => (
    <g.Table>
        <g.Line/>
        <ContactRow>
            <ContactLink onClick={() => window.open('mailto:justintaylorweiss@gmail.com')}>
                justintaylorweiss@gmail.com
            </ContactLink>
            <ContactLink onClick={() => window.open('mailto:justintaylorweiss@gmail.com')}>
                Email
            </ContactLink>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <ContactLink onClick={() => window.open("https://www.linkedin.com/in/justin-taylor-weiss", "_blank")}>
                justin-taylor-weiss
            </ContactLink>
            <ContactLink onClick={() => window.open("https://www.linkedin.com/in/justin-taylor-weiss", "_blank")}>
                LinkedIn
            </ContactLink>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <ContactLink onClick={() => window.open("https://github.com/JustinTaylorWeiss", "_blank")}>
                justintaylorweiss
            </ContactLink>
            <ContactLink onClick={() => window.open("https://github.com/JustinTaylorWeiss", "_blank")}>
                GitHub
            </ContactLink>
        </ContactRow>
        <g.Line/>
        <ContactRow>
            <ContactLink>
                numeral#3694
            </ContactLink>
            <ContactLink>
                Discord
            </ContactLink>
        </ContactRow>
        <g.Line/>
    </g.Table>
)