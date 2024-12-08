import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileCard from './ProfileCard';

interface Profile {
    id: number;
    name: string;
    age: number;
    // Add other profile properties as needed
}

interface SwipeableProfileProps {
    profiles: Profile[];
    onSwipe: (id: number, action: string) => void;
}

const SwipeableProfile: React.FC<SwipeableProfileProps> = ({ profiles, onSwipe }) => {
    const history = useHistory();

    const handleProfileClick = (id: number) => {
        history.push(`/profile/${id}`);
    };

    return (
        <div className="swipeable-container">
            {profiles.map(profile => (
                <div key={profile.id} className="swipeable-card" onClick={() => handleProfileClick(profile.id)}>
                    <ProfileCard profile={profile} />
                    <div className="swipe-buttons">
                        <button onClick={() => onSwipe(profile.id, 'dislike')} className="swipe-button dislike">Dislike</button>
                        <button onClick={() => onSwipe(profile.id, 'like')} className="swipe-button like">Like</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SwipeableProfile; 