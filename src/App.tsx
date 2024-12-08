import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfileDetails from './pages/ProfileDetails';
import ChatPage from './pages/ChatPage';

const App: React.FC = () => {
    return (
        <Router basename="/mpc-hello">
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/profile/:id" component={ProfileDetails} />
                <Route path="/chat" component={ChatPage} />
            </Switch>
        </Router>
    );
};

export default App; 