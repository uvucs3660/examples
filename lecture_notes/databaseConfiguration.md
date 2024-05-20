Every team has a database named: project1_teamX eg. project1_team3

Change the database name to match, then using the environment variable: CLASS_DB_URL, have you program reference the environment variable.

That way when we use it on our class server, it can get the proper configuratin from the environment

postgresql://tomcat:ucFw12cvoxzCje\_t94UZBg@twohtwo-17.g95.gcp-us-west2.cockroachlabs.cloud:26257/\<database>?sslmode=verify-full
