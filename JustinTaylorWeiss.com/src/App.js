import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";
import './global/styles/App.css';

import { Home } from './home'

function App() {

    return <>
        <Route path="/" exact={true}>
            <Home/>
        </Route>
    </>
}

export default App;
