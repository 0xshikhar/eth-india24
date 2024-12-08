import { useState, useEffect } from 'react';
import { UserProfile, MatchScore } from '../types/index';

export default function MatchingInterface() {
    const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
    const [potentialMatches, setPotentialMatches] = useState<MatchScore[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const findMatches = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/find-matches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: currentUser?.id }), 
            });

            const matches = await response.json();
            setPotentialMatches(matches);
        } catch (error) {
            console.error('Error finding matches:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className= "max-w-4xl mx-auto p-4" >
        <h1 className="text-2xl font-bold mb-4" > Find Your Match </h1>

    {
        currentUser ? (
            <div className= "space-y-4" >
            <div className="bg-white p-4 rounded-lg shadow" >
                <h2 className="text-xl font-semibold mb-2" > Your Profile </h2>
                    < div className = "grid grid-cols-2 gap-4" >
                        <div>
                        <h3 className="font-medium" > Skills </h3>
                            < div className = "flex flex-wrap gap-2" >
                            {
                                currentUser.skills.map(skill => (
                                    <span key= { skill } className = "bg-blue-100 px-2 py-1 rounded" >
                                    { skill }
                                    </span>
                                ))
                            }
                                </div>
                                </div>
                                < div >
                                <h3 className="font-medium" > Looking For </h3>
                                    < div className = "flex flex-wrap gap-2" >
                                    {
                                        currentUser.lookingFor.map(skill => (
                                            <span key= { skill } className = "bg-green-100 px-2 py-1 rounded" >
                                            { skill }
                                            </span>
                                        ))
                                    }
                                        </div>
                                        </div>
                                        </div>
                                        </div>

                                        < button
        onClick = { findMatches }
        disabled = { isLoading }
        className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
            { isLoading? 'Finding...': 'Find Matches' }
            </button>

        {
            potentialMatches.length > 0 && (
                <div className="space-y-4" >
                    <h2 className="text-xl font-semibold" > Potential Matches </h2>
            {
                potentialMatches.map(match => (
                    <div key= { match.userId } className = "bg-white p-4 rounded-lg shadow" >
                    <div className="flex justify-between items-center" >
                <div>
                <h3 className="font-medium" > Match Score: {(match.score * 100).toFixed(1)}% </h3>
                    < div className = "text-sm text-gray-600" >
                    {
                        match.matchReason.map(reason => (
                            <div key= { reason } > { reason } </div>
                        ))
                    }
                        </div>
                        </div>
                        < button className = "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" >
                            Connect
                            </button>
                            </div>
                            </div>
              ))
        }
        </div>
          )
    }
    </div>
      ) : (
        <div className= "text-center py-8" >
        Please log in to find matches
            </div>
      )
}
</div>
  );
}