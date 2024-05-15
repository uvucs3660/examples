function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

const members = [
    { name: "Matthew Ackerman", email: "10750972@uvu.edu" },
    { name: "Jared Acosta", email: "10994857@uvu.edu" },
    { name: "Jacob Barrus", email: "10861146@uvu.edu" },
    { name: "Tanner Bingham", email: "10869032@uvu.edu" },
    { name: "Michael Calcamuggio", email: "10927160@uvu.edu" },
    { name: "Diana Cervantes", email: "10801985@uvu.edu" },
    { name: "Carson Cowan", email: "10840830@uvu.edu" },
    { name: "Andrew Gallagher", email: "10766863@uvu.edu" },
    { name: "Cameron Hancock", email: "10929194@uvu.edu" },
    { name: "Katie Hancock", email: "10979699@uvu.edu" },
    { name: "Andrew Lewis", email: "10833944@uvu.edu" },
    { name: "Nick Potter", email: "10786774@uvu.edu" },
    { name: "Grayson Pratt", email: "10759809@uvu.edu" },
    { name: "Benjamin Priest", email: "10833278@uvu.edu" },
    { name: "Blake Riding", email: "10780879@uvu.edu" },
    { name: "Jacob Rodgers", email: "10296776@uvu.edu" },
    { name: "Jessda Say", email: "10837509@uvu.edu" },
    { name: "Jack Scothorne", email: "10870776@uvu.edu" },
    { name: "Nolen Shubin", email: "10766374@uvu.edu" },
    { name: "Colten Spencer", email: "10804538@uvu.edu" },
    { name: "Fischer Wells", email: "10816331@uvu.edu" },
    { name: "Matthew Whetten", email: "10685257@uvu.edu" },
    { name: "Brandon Woodruff", email: "10813670@uvu.edu" },
    { name: "Tyler Woods", email: "10805421@uvu.edu" },
    { name: "Joshua Wright", email: "10810570@uvu.edu" }
];

// Shuffle members to randomize team assignments
shuffleArray(members);

function generateTeamsAndProjects(numTeams, numProjects) {
    const teams = Array.from({ length: numProjects }, () => Array.from({ length: numTeams }, () => []));

    // Assign members to teams for each project
    for (let p = 0; p < numProjects; p++) {
        for (let m = 0; m < members.length; m++) {
            let teamIndex = (m + p * (m % numTeams)) % numTeams; // calculate the current team index based on project and member
            teams[p][teamIndex].push(members[m]);
        }
    }

    return teams;
}

const numTeams = 5; // number of teams per project
const numProjects = 5; // number of projects

const teams = generateTeamsAndProjects(numTeams, numProjects);

// Convert teams to JSON including member details
const teamsJson = JSON.stringify(teams, null, 2);
console.log(teamsJson);
