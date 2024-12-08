interface UserProfile {
    id: string;
    name: string;
    skills: string[];
    interests: string[];
    lookingFor: string[];
    spotifyId?: string;
    goodreadsId?: string;
    youtubeId?: string;
}

interface MatchScore {
    userId: string;
    score: number;
    matchReason: string[];
}
