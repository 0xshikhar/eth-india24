export class MPCMatcher {
    constructor() {}

    /**
     * Computes the skill match score based on shared skills and needs between two parties.
     *
     * @param party1Skills - Skills of the first party.
     * @param party2Skills - Skills of the second party.
     * @param party1Needs - Needs of the first party.
     * @param party2Needs - Needs of the second party.
     * @returns The computed skill match score.
     */
    computeSkillMatch(
        party1Skills: string[],
        party2Skills: string[],
        party1Needs: string[],
        party2Needs: string[]
    ): number {
        // Count the number of skills from party1 that match party2's needs
        const skillMatch1 = party1Skills.filter(skill => party2Needs.includes(skill)).length;

        // Count the number of skills from party2 that match party1's needs
        const skillMatch2 = party2Skills.filter(skill => party1Needs.includes(skill)).length;

        // Compute a combined skill match score (average or sum, adjust based on your preference)
        const totalSkillMatch = skillMatch1 + skillMatch2;

        return totalSkillMatch;
    }

    /**
     * Computes the interest match score based on similarity of weighted interests.
     *
     * @param party1Interests - Map of interests with weights for the first party.
     * @param party2Interests - Map of interests with weights for the second party.
     * @returns The computed interest match score.
     */
    computeInterestMatch(
        party1Interests: Map<string, number>,
        party2Interests: Map<string, number>
    ): number {
        let similarityScore = 0;

        // Calculate the intersection of interests and compute a weighted similarity score
        for (const [interest, weight1] of party1Interests.entries()) {
            if (party2Interests.has(interest)) {
                const weight2 = party2Interests.get(interest)!;
                // Example: Use the product of weights to measure similarity
                similarityScore += weight1 * weight2;
            }
        }

        return similarityScore;
    }
}
