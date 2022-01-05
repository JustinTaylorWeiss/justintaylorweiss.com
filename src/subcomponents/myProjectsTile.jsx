import * as g from "../global/components"
import resume from "../assets/resume.pdf";

export const MyProjectsTile = ({}) => (
    <g.BackgroundWrapper color="#ffcd01" id="projects">
        <g.BigTextWrapper>
            PROJ<br/>
            ECTS
        </g.BigTextWrapper>
        <g.ListWrap level="3">
            <hr/>
            <g.ListColumn>
                <g.TextBlockL>
                    <g.WOH onClick={() => window.open('https://www.secintcorp.com', '_blank')}>
                        <b>SecInt</b>
                    </g.WOH>
                </g.TextBlockL>
                <g.AlignSmallLeftText>
                    A company site designed and built using a website builder with custom code and styling.
                </g.AlignSmallLeftText>
            </g.ListColumn>
            <hr/>
            <g.ResumeLink onClick={() => window.open(resume, '_blank')}>
                <b>Resume</b>
                <hr/>
            </g.ResumeLink>
        </g.ListWrap>
    </g.BackgroundWrapper>
);
