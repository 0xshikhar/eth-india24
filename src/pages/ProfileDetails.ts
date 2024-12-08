import React from 'react';
import { useParams } from 'react-router-dom';
import dummyProfiles from '../data/dummyProfiles';

interface ProfileParams {
    id: string;
}

const ProfileDetails: React.FC = () => {
    const { id } = useParams<ProfileParams>();
    
    // Ensure id is defined before using it
    if (!id) {
        return <div>Profile not found</div>;
    }

    const profile = dummyProfiles.find(p => p.id === parseInt(id, 10));

    if (!profile) {
        return <div>Profile not found</div>;
    }

    return (
        <div className='profile-details'>
            <h1>{profile.name}</h1>
            <p>{profile.age} years old</p>
            {/* Add more profile details here */}
        </div>
    );
};

export default ProfileDetails; 