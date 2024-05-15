const { Client } = require("pg");

const client = new Client("postgresql://tomcat:ucFw12cvoxzCje_t94UZBg@twohtwo-17.g95.gcp-us-west2.cockroachlabs.cloud:26257/project1_team<X>?sslmode=verify-full");

(async () => {
    await client.connect();
    try {
        const results = await client.query("SELECT * from document_store where path = 'some/path'");
        console.log(results);
    } catch (err) {
        console.error("error executing query:", err);
    } finally {
        client.end();
    }
})();