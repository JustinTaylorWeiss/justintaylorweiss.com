import * as g from "../global/components"

export const ContactMeTile = ({}) => (
    <g.BackgroundWrapper color="#2fb0d4" id="contactMe">
        <g.BigTextWrapper>
            CONT<br/>
            ACT<br/>
            ME
        </g.BigTextWrapper>
        <g.ListWrap level="2">
            <hr/>
            <g.ListRow>
                <g.TextBlockL>
                    <g.WOH onClick={() => window.open('mailto:justintaylorweiss@gmail.com')}>
                        justintaylorweiss@gmail.com
                    </g.WOH>
                </g.TextBlockL>
                <g.TextBlockR>
                    <g.WOH onClick={() => window.open('mailto:justintaylorweiss@gmail.com')}>
                        Email
                    </g.WOH>
                </g.TextBlockR>
            </g.ListRow>
            <hr/>
            <g.ListRow>
                <g.TextBlockL>
                    <g.WOH onClick={() => window.open("https://www.linkedin.com/in/justin-taylor-weiss", "_blank")}>
                        justin-taylor-weiss
                    </g.WOH>
                </g.TextBlockL>
                <g.TextBlockR>
                    <g.WOH onClick={() => window.open("https://www.linkedin.com/in/justin-taylor-weiss", "_blank")}>
                        LinkedIn
                    </g.WOH>
                </g.TextBlockR>
            </g.ListRow>
            <hr/>
            <g.ListRow>
                <g.TextBlockL>
                    <g.WOH onClick={() => window.open("https://github.com/JustinTaylorWeiss", "_blank")}>
                        justintaylorweiss
                    </g.WOH>
                </g.TextBlockL>
                <g.TextBlockR>
                    <g.WOH onClick={() => window.open("https://github.com/JustinTaylorWeiss", "_blank")}>
                        GitHub
                    </g.WOH>
                </g.TextBlockR>
            </g.ListRow>
            <hr/>
            <g.ListRow>
                <g.TextBlockL>
                    numeral#3694
                </g.TextBlockL>
                <g.TextBlockR>
                    Discord
                </g.TextBlockR>
            </g.ListRow>
            <hr/>
        </g.ListWrap>
    </g.BackgroundWrapper>
);