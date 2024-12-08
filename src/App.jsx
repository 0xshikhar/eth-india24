import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfileDetails from './pages/ProfileDetails';
import ChatPage from './pages/ChatPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/profile/:id" component={ProfileDetails} />
                <Route path="/chat" component={ChatPage} />
            </Switch>
        </Router>
    );
};

export default App; 