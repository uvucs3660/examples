function generateTeamsAndProjects(memberCount, teamCount, projectCount) {
    const result = {};
    const members = Array.from({ length: memberCount }, (_, i) => i + 1);

    // Function to rotate array to the right
    const rotateRight = (array, steps) => {
        const output = [...array];
        for (let i = 0; i < steps; i++) {
            output.unshift(output.pop());
        }
        return output;
    };

    // Generate teams for each project
    for (let p = 0; p < projectCount; p++) {
        const projectKey = `Project${p + 1}`;
        result[projectKey] = {};

        for (let t = 0; t < teamCount; t++) {
            const teamKey = `Team${t + 1}`;
            result[projectKey][teamKey] = [];

            for (let m = 0; m < members.length / teamCount; m++) {
                const index = (m * teamCount + t + p * (members.length / teamCount)) % members.length;
                result[projectKey][teamKey].push(`A${members[index]}`);
            }
        }
    }

    return result;
}

// Use this function to generate the teams and projects
const teamsAndProjects = generateTeamsAndProjects(25, 5, 5);
console.log(teamsAndProjects);
