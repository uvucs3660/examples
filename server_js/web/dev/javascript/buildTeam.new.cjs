

const fs = require('fs');
const { execSync } = require('child_process');
const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');

// Read and parse JSON data
const teamsData = JSON.parse(fs.readFileSync('./ProjectTeams.json'));
const membersData = JSON.parse(fs.readFileSync('./ProjectMembers.json'));

// PostgreSQL connection
const masterClient = new Client({
    host: 'localhost',
    user: 'masteruser',
    password: 'masterpassword',
    database: 'postgres'
});

// Helper to get email by Member ID
const getEmailById = (id) => {
    const member = membersData.find(member => member.MemberId === parseInt(id));
    return member ? member.email : null;
};

(async () => {
    try {
        await masterClient.connect();

        for (const [projectName, teams] of Object.entries(teamsData)) {
            for (const [teamName, memberIds] of Object.entries(teams)) {
                const dbName = `${projectName}_${teamName}`.toLowerCase(); // e.g., project1_team1
                const dbUsername = `user_${dbName}`;
                const dbPassword = 'password'; // Should be securely generated

                // Create database and user
                await masterClient.query(`CREATE DATABASE ${dbName}`);
                await masterClient.query(`CREATE USER ${dbUsername} WITH ENCRYPTED PASSWORD '${dbPassword}'`);
                await masterClient.query(`GRANT ALL PRIVILEGES ON DATABASE ${dbName} TO ${dbUsername}`);

                // Connect to the new database to set up the table
                const client = new Client({
                    host: 'localhost',
                    user: dbUsername,
                    password: dbPassword,
                    database: dbName
                });
                await client.connect();

                // Create table
                const tableSetup = `
                CREATE TABLE team_data (
                    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                    db_user VARCHAR(255),
                    path VARCHAR(255) UNIQUE,
                    data JSONB,
                    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
                `;
                await client.query(tableSetup);

                // Add each member to the GitHub repo and create their database accounts
                for (const memberId of memberIds) {
                    const email = getEmailById(memberId);
                    if (email) {
                        // GitHub repo management
                        console.log(`Adding ${email} to ${dbName}`);
                        execSync(`gh api -X PUT /repos/:owner/${dbName}/collaborators/${email} --field permission=push`);

                        // PostgreSQL user for each team member
                        const memberDbUsername = `user_${memberId}`;
                        await client.query(`CREATE USER ${memberDbUsername} WITH ENCRYPTED PASSWORD '${dbPassword}'`);
                        await client.query(`GRANT SELECT, INSERT ON team_data TO ${memberDbUsername}`);
                    }
                }

                await client.end();
            }
        }
    } catch (error) {
        console.error('Error in PostgreSQL or GitHub operations:', error);
    } finally {
        await masterClient.end();
    }
})();

