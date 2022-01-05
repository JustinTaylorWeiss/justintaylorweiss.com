import * as g from "../global/components"

export const AboutMeTile = ({}) => (
    <g.BackgroundWrapper color="#ee1cc0" id="aboutMe">
        <g.BigTextWrapper>
            ABOUT<br/>
            ME
        </g.BigTextWrapper>
        <g.ListWrap level="1">
            <g.AlignLeftText>
                I'm a graduate of Farmingdale State College with a Bachelor of Science in Computer Science and Information Systems with a minor in Sociology.
                My interest in programming began when my brother showed me SpriteKit when I was 14.
                Through creating my first game I learned to love the idea of creating something that could be experienced by people all over the world.
                This drew me toward web development.
                Now I have a focus in React and Redux, as well as game development.
                When I’m not making websites, I like to make or play video games.
                Feel free to check out some of my projects or my GitHub page listed below.
            </g.AlignLeftText>
        </g.ListWrap>
    </g.BackgroundWrapper>
);
