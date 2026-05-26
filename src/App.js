import "./App.css"
import React from 'react';
import styled from "styled-components";
import { LandingTile } from "./tiles/landingTile";
import { AboutMeTile } from "./tiles/aboutMeTile";
import { ContactMeTile } from "./tiles/contactMeTile";
import { MyProjectsTile } from "./tiles/myProjectsTile";
import { ReturnToTopTile } from "./tiles/returnToTopTile";

const PageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const App = () => <PageWrap>
    <LandingTile/>
    <AboutMeTile/>
    <MyProjectsTile/>
    <ContactMeTile/>
    <ReturnToTopTile/>
</PageWrap>

export default App;
