import { MPCMatcher } from "./mpc";

const matcher = new MPCMatcher();

const party1Skills = ["JavaScript", "React", "Node.js"];
const party2Skills = ["Python", "Django", "React"];
const party1Needs = ["Python", "Django"];
const party2Needs = ["JavaScript", "Node.js"];

const skillMatchScore = matcher.computeSkillMatch(party1Skills, party2Skills, party1Needs, party2Needs);
console.log(`Skill Match Score: ${skillMatchScore}`);

const party1Interests = new Map([["Movies", 0.8], ["Music", 0.9]]);
const party2Interests = new Map([["Movies", 0.7], ["Sports", 0.5]]);

const interestMatchScore = matcher.computeInterestMatch(party1Interests, party2Interests);
console.log(`Interest Match Score: ${interestMatchScore}`);
