const fs = require('fs');
const { execSync } = require('child_process');
const { Client } = require('pg');

// Read and parse JSON data
const teamsData = JSON.parse(fs.readFileSync('./ProjectTeams.json'));
const membersData = JSON.parse(fs.readFileSync('./ProjectMembers.json'));
const organization = 'uvucs3660';

// PostgreSQL connection
const dbClient = new Client({  connectionString: process.env.CLASS_DB_URL });
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'cs3660'
// });
// const dbClient = new Client({
//     host: 'twohtwo-17.g95.gcp-us-west2.cockroachlabs.cloud',
//     user: 'michael',
//     password: 'all4Cockroach!',
//     database: 'cs3660'
// });

// Helper to get email by Member ID
const getEmailById = (id) => {
    const member = membersData.find(member => member.MemberId === parseInt(id));
    return member ? member.email : null;
};

// Helper to get email by Member ID
const getGithubById = (id) => {
    const member = membersData.find(member => member.MemberId === parseInt(id));
    return member ? member.github : null;
};

async function buildTeam() {
    try {
        await dbClient.connect();

        for (const member of membersData) {
            // GitHub repo management
            // console.log(`# Creating DB user for ${member.email}`);

            // PostgreSQL user for each team member
            const memberDbUsername = `user_${member.MemberId}`;
            const memberDbPassword = 'changeMePlease!orElse';
            await dbClientquery(`CREATE USER ${memberDbUsername} WITH ENCRYPTED PASSWORD '${memberDbPassword}'`);
        }

        for (const [projectName, teams] of Object.entries(teamsData)) {
            for (const [teamName, memberIds] of Object.entries(teams)) {
                const dbName = `${projectName}_${teamName}`.toLowerCase(); // e.g., project1_team1
                const dbUsername = `main_${dbName}`;
                const dbPassword = 'all4cs3660'; // Should be securely generated
                const repoName = `${organization}/${dbName}`;
//                console.log(`Creating ${dbName} with members ${memberIds.join(', ')}`);
//                console.log(`gh repo create ${repoName} --private`);
                execSyncLog(`gh repo create ${repoName} --private`);
                // Create database and user
                try {
                    await dbClientquery(`CREATE DATABASE ${dbName}`);
                    await dbClientquery(`CREATE USER ${dbUsername} WITH ENCRYPTED PASSWORD '${dbPassword}'`);
                    await dbClientquery(`GRANT ALL PRIVILEGES ON DATABASE ${dbName} TO ${dbUsername}`);
                } catch (error) {
                    console.error(`Error creating ${dbName} database and user:`, error);
                }
                // Create table
                const newClient = new Client({
                    host: 'localhost',
                    user: 'root',
                    password: 'root',
                    database: dbName
                });
                await newClient.connect();
                const tableSetup = `
                    CREATE TABLE ${dbName}.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    )`;
                await newClientquery(tableSetup);
                await newClient.end();
                // Add each member to the GitHub repo and create their database accounts
                for (const memberId of memberIds) {
                    const email = getEmailById(memberId);
                    if (email) {
                        // PostgreSQL user for each team member
                        const memberDbUsername = `user_${memberId}`;
                        await dbClientquery(`GRANT ALL PRIVILEGES ON DATABASE ${dbName} TO ${memberDbUsername};`);
                    }
                    const github = getGithubById(memberId);
                    if (github) {
                        // GitHub repo management
                        // console.log(`Adding ${email} to ${dbName}`);
                        // console.log(`gh api -X PUT /repos/${repoName}/collaborators/${email} --field permission=admin`);
                        execSyncLog(`gh api -X PUT /repos/${repoName}/collaborators/${github} --field permission=admin`);
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error in PostgreSQL or GitHub operations:', error);
    } finally {
        await dbClient.end();
    }
}

async function dbClientquery(sql){
//    console.log(sql + ";");
}

async function newClientquery(sql){
//    console.log(sql + ";");
}

async function execSyncLog(cmd){
    console.log(cmd);
}

buildTeam();

