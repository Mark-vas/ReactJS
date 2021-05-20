import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MessageChats from './components/MessageChats.jsx'

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Switch>
                <Route path="/" exact children={<Layout />}>
                </Route>,
                <Route path="/:chatId" children={<MessageChats />}>
                </Route>,
            </Switch>
        </MuiThemeProvider>
    </BrowserRouter>,

    document.getElementById('root'),
);