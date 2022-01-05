import "./App.css"
import React from 'react';
import { LandingTile } from "./subcomponents/landingTile";
import { ArtTile } from "./subcomponents/artTile";
import { AboutMeTile } from "./subcomponents/aboutMeTile";
import { ContactMeTile } from "./subcomponents/contactMeTile";
import { MyProjectsTile } from "./subcomponents/myProjectsTile";
import { ReturnToTopTile } from "./subcomponents/returnToTopTile";


const App = () => <>
    <LandingTile/>
    <AboutMeTile/>
    <ContactMeTile/>
    <MyProjectsTile/>
    <ReturnToTopTile/>
</>

export default App;
