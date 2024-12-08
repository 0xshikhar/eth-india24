import React from 'react';
import SwipeableProfile from '../components/SwipeableProfile';
import dummyProfiles from '../data/dummyProfiles';
import { useHistory, Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const history = useHistory();

    const handleSwipe = (id: number, action: string) => {
        console.log(`Profile ${id} was ${action}`);
        // Handle the swipe action (like/dislike)
    };

    const goToChat = () => {
        history.push('/chat');
    };

    return (
        <div className="home-page">
            <h1>Swipe Profiles</h1>
            <SwipeableProfile profiles={dummyProfiles} onSwipe={handleSwipe} />
            <Link to="/chat">Go to Chat</Link>
        </div>
    );
};

export default HomePage; 