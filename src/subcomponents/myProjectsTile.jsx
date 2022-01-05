import * as g from "../global/components"

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
                <g.AlignLeftText>
                    Ribeye andouille cupim short loin t-bone capicola cow pig salami pork belly landjaeger tongue buffalo tenderloin tri-tip.
                </g.AlignLeftText>
            </g.ListColumn>
            <hr/>
        </g.ListWrap>
    </g.BackgroundWrapper>
);
