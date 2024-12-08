import { SpotifyApi } from 'spotify-web-api-node';
import { google } from 'googleapis';
import { GoodreadsApi } from 'goodreads-api-node';

export class ExternalAPIs {
    private spotify: SpotifyApi;
    private youtube: any;
    private goodreads: any;

    constructor() {
        this.spotify = new SpotifyApi({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET
        });

        this.youtube = google.youtube({
            version: 'v3',
            auth: process.env.YOUTUBE_API_KEY
        });

        this.goodreads = new GoodreadsApi({
            key: process.env.GOODREADS_KEY,
            secret: process.env.GOODREADS_SECRET
        });
    }

    async getSpotifyPreferences(userId: string): Promise<Map<string, number>> {
        const topTracks = await this.spotify.getUserTopTracks(userId);
        const genres = new Map<string, number>();

        topTracks.body.items.forEach(track => {
            track.genres.forEach(genre => {
                genres.set(genre, (genres.get(genre) || 0) + 1);
            });
        });

        return this.normalizePreferences(genres);
    }

    async getYoutubePreferences(userId: string): Promise<Map<string, number>> {
        const activities = await this.youtube.activities.list({
            part: 'snippet,contentDetails',
            mine: true
        });

        const categories = new Map<string, number>();
        activities.data.items.forEach(activity => {
            const category = activity.snippet.categoryId;
            categories.set(category, (categories.get(category) || 0) + 1);
        });

        return this.normalizePreferences(categories);
    }

    private normalizePreferences(prefs: Map<string, number>): Map<string, number> {
        const total = Array.from(prefs.values()).reduce((a, b) => a + b, 0);
        const normalized = new Map<string, number>();

        prefs.forEach((value, key) => {
            normalized.set(key, value / total);
        });

        return normalized;
    }
}