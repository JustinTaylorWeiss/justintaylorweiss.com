import "./App.css"
import React from 'react';
import styled from "styled-components";
import * as g from "./global/components"
import { LandingTile } from "./subcomponents/landingTile";
import { ArtTile } from "./subcomponents/artTile";
import { AboutMeTile } from "./subcomponents/aboutMeTile";
import { ContactMeTile } from "./subcomponents/contactMeTile";
import { MyProjectsTile } from "./subcomponents/myProjectsTile";
import { ReturnToTopTile } from "./subcomponents/returnToTopTile";

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
