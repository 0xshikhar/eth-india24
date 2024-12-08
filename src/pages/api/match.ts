import type { ViteRequest, ViteResponse } from "vite-plugin-mock";
import { MPCMatcher } from "../../lib/mpc";
import { ExternalAPIs } from "../../lib/api-integrations";

export default async function handler(req: ViteRequest, res: ViteResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { user1, user2 } = req.body;

    const matcher = new MPCMatcher();
    const apis = new ExternalAPIs();

    try {
        const skillScore = matcher.computeSkillMatch(
            user1.skills,
            user2.skills,
            user1.lookingFor,
            user2.lookingFor
        );

        const [spotifyScore, youtubeScore] = await Promise.all([
            matcher.computeInterestMatch(
                await apis.getSpotifyPreferences(user1.spotifyId),
                await apis.getSpotifyPreferences(user2.spotifyId)
            ),
            matcher.computeInterestMatch(
                await apis.getYoutubePreferences(user1.youtubeId),
                await apis.getYoutubePreferences(user2.youtubeId)
            )
        ]);

        const finalScore = skillScore * 0.5 + spotifyScore * 0.25 + youtubeScore * 0.25;

        return res.status(200).json({
            matchScore: finalScore,
            details: {
                skillScore,
                spotifyScore,
                youtubeScore,
            },
        });
    } catch (error) {
        console.error("Matching error:", error);
        return res.status(500).json({ message: "Error computing match" });
    }
}
