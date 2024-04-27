import {db_teams} from "../database/teams";

// -----------------------
// GET ALL TEAMS
// -----------------------
// used in: TeamsPage.vue

export const getAllTeams = () => {
    return db_teams;
};

// -----------------------
// GET ONE TEAMS
// -----------------------
// used in: IndividualTeamPage.vue, CourseInstructor.vue

export const getOneTeam = (slug) => {
    return db_teams.find((team) => team.slug === slug);
};

// -----------------------
// GET FOUNDERS
// -----------------------
// used in: About.vue

export const getFounders = () => {
    return db_teams.filter((team) =>
        team.position.toLowerCase().includes("founder")
    );
};
