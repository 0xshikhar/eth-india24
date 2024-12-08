import React from 'react';

interface Profile {
    id: number;
    name: string;
    age: number;
    // Add other profile properties as needed
}

interface ProfileCardProps {
    profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
    return (
        <div className="profile-card">
            <h2>{profile.name}</h2>
            <p>{profile.age} years old</p>
            {/* ... other profile details ... */}
        </div>
    );
};

export default ProfileCard; 