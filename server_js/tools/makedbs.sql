CREATE USER user_0 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_1 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_2 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_3 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_4 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_5 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_6 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_7 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_8 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_9 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_10 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_11 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_12 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_13 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_14 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_15 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_16 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_17 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_18 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_19 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_20 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_21 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_22 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_23 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE USER user_24 WITH ENCRYPTED PASSWORD 'changeMePlease!orElse';
CREATE DATABASE project1_team1;
CREATE USER main_project1_team1 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project1_team1 TO main_project1_team1;

CREATE TABLE project1_team1.public.document_store (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path VARCHAR(255) UNIQUE,
    data JSONB,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    db_user VARCHAR(255) DEFAULT user
);
GRANT ALL PRIVILEGES ON DATABASE project1_team1 TO user_0;;
GRANT ALL PRIVILEGES ON DATABASE project1_team1 TO user_1;;
GRANT ALL PRIVILEGES ON DATABASE project1_team1 TO user_2;;
GRANT ALL PRIVILEGES ON DATABASE project1_team1 TO user_3;;
GRANT ALL PRIVILEGES ON DATABASE project1_team1 TO user_4;;
# here so far
CREATE DATABASE project1_team2;
CREATE USER main_project1_team2 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project1_team2 TO main_project1_team2;

CREATE TABLE project1_team2.public.document_store (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path VARCHAR(255) UNIQUE,
    data JSONB,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    db_user VARCHAR(255) DEFAULT user
);
GRANT ALL PRIVILEGES ON DATABASE project1_team2 TO user_5;;
GRANT ALL PRIVILEGES ON DATABASE project1_team2 TO user_6;;
GRANT ALL PRIVILEGES ON DATABASE project1_team2 TO user_7;;
GRANT ALL PRIVILEGES ON DATABASE project1_team2 TO user_8;;
GRANT ALL PRIVILEGES ON DATABASE project1_team2 TO user_9;;
CREATE DATABASE project1_team3;
CREATE USER main_project1_team3 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project1_team3 TO main_project1_team3;

CREATE TABLE project1_team3.public.document_store (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path VARCHAR(255) UNIQUE,
    data JSONB,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    db_user VARCHAR(255) DEFAULT user
);
GRANT ALL PRIVILEGES ON DATABASE project1_team3 TO user_10;;
GRANT ALL PRIVILEGES ON DATABASE project1_team3 TO user_11;;
GRANT ALL PRIVILEGES ON DATABASE project1_team3 TO user_12;;
GRANT ALL PRIVILEGES ON DATABASE project1_team3 TO user_13;;
GRANT ALL PRIVILEGES ON DATABASE project1_team3 TO user_14;;
CREATE DATABASE project1_team4;
CREATE USER main_project1_team4 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project1_team4 TO main_project1_team4;

CREATE TABLE project1_team4.public.document_store (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path VARCHAR(255) UNIQUE,
    data JSONB,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    db_user VARCHAR(255) DEFAULT user
);
GRANT ALL PRIVILEGES ON DATABASE project1_team4 TO user_15;;
GRANT ALL PRIVILEGES ON DATABASE project1_team4 TO user_16;;
GRANT ALL PRIVILEGES ON DATABASE project1_team4 TO user_17;;
GRANT ALL PRIVILEGES ON DATABASE project1_team4 TO user_18;;
GRANT ALL PRIVILEGES ON DATABASE project1_team4 TO user_19;;
CREATE DATABASE project1_team5;
CREATE USER main_project1_team5 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project1_team5 TO main_project1_team5;

                    CREATE TABLE project1_team5.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project1_team5 TO user_20;;
GRANT ALL PRIVILEGES ON DATABASE project1_team5 TO user_21;;
GRANT ALL PRIVILEGES ON DATABASE project1_team5 TO user_22;;
GRANT ALL PRIVILEGES ON DATABASE project1_team5 TO user_23;;
GRANT ALL PRIVILEGES ON DATABASE project1_team5 TO user_24;;
CREATE DATABASE project2_team1;
CREATE USER main_project2_team1 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project2_team1 TO main_project2_team1;

                    CREATE TABLE project2_team1.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project2_team1 TO user_0;;
GRANT ALL PRIVILEGES ON DATABASE project2_team1 TO user_5;;
GRANT ALL PRIVILEGES ON DATABASE project2_team1 TO user_10;;
GRANT ALL PRIVILEGES ON DATABASE project2_team1 TO user_15;;
GRANT ALL PRIVILEGES ON DATABASE project2_team1 TO user_20;;
CREATE DATABASE project2_team2;
CREATE USER main_project2_team2 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project2_team2 TO main_project2_team2;

                    CREATE TABLE project2_team2.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project2_team2 TO user_1;;
GRANT ALL PRIVILEGES ON DATABASE project2_team2 TO user_6;;
GRANT ALL PRIVILEGES ON DATABASE project2_team2 TO user_11;;
GRANT ALL PRIVILEGES ON DATABASE project2_team2 TO user_16;;
GRANT ALL PRIVILEGES ON DATABASE project2_team2 TO user_21;;
CREATE DATABASE project2_team3;
CREATE USER main_project2_team3 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project2_team3 TO main_project2_team3;

                    CREATE TABLE project2_team3.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project2_team3 TO user_2;;
GRANT ALL PRIVILEGES ON DATABASE project2_team3 TO user_7;;
GRANT ALL PRIVILEGES ON DATABASE project2_team3 TO user_12;;
GRANT ALL PRIVILEGES ON DATABASE project2_team3 TO user_17;;
GRANT ALL PRIVILEGES ON DATABASE project2_team3 TO user_22;;
CREATE DATABASE project2_team4;
CREATE USER main_project2_team4 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project2_team4 TO main_project2_team4;

                    CREATE TABLE project2_team4.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project2_team4 TO user_3;;
GRANT ALL PRIVILEGES ON DATABASE project2_team4 TO user_8;;
GRANT ALL PRIVILEGES ON DATABASE project2_team4 TO user_13;;
GRANT ALL PRIVILEGES ON DATABASE project2_team4 TO user_18;;
GRANT ALL PRIVILEGES ON DATABASE project2_team4 TO user_23;;
CREATE DATABASE project2_team5;
CREATE USER main_project2_team5 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project2_team5 TO main_project2_team5;

                    CREATE TABLE project2_team5.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project2_team5 TO user_4;;
GRANT ALL PRIVILEGES ON DATABASE project2_team5 TO user_9;;
GRANT ALL PRIVILEGES ON DATABASE project2_team5 TO user_14;;
GRANT ALL PRIVILEGES ON DATABASE project2_team5 TO user_19;;
GRANT ALL PRIVILEGES ON DATABASE project2_team5 TO user_24;;
CREATE DATABASE project3_team1;
CREATE USER main_project3_team1 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project3_team1 TO main_project3_team1;

                    CREATE TABLE project3_team1.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project3_team1 TO user_0;;
GRANT ALL PRIVILEGES ON DATABASE project3_team1 TO user_6;;
GRANT ALL PRIVILEGES ON DATABASE project3_team1 TO user_12;;
GRANT ALL PRIVILEGES ON DATABASE project3_team1 TO user_18;;
GRANT ALL PRIVILEGES ON DATABASE project3_team1 TO user_24;;
CREATE DATABASE project3_team2;
CREATE USER main_project3_team2 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project3_team2 TO main_project3_team2;

                    CREATE TABLE project3_team2.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project3_team2 TO user_1;;
GRANT ALL PRIVILEGES ON DATABASE project3_team2 TO user_7;;
GRANT ALL PRIVILEGES ON DATABASE project3_team2 TO user_13;;
GRANT ALL PRIVILEGES ON DATABASE project3_team2 TO user_19;;
GRANT ALL PRIVILEGES ON DATABASE project3_team2 TO user_20;;
CREATE DATABASE project3_team3;
CREATE USER main_project3_team3 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project3_team3 TO main_project3_team3;

                    CREATE TABLE project3_team3.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project3_team3 TO user_2;;
GRANT ALL PRIVILEGES ON DATABASE project3_team3 TO user_8;;
GRANT ALL PRIVILEGES ON DATABASE project3_team3 TO user_14;;
GRANT ALL PRIVILEGES ON DATABASE project3_team3 TO user_15;;
GRANT ALL PRIVILEGES ON DATABASE project3_team3 TO user_21;;
CREATE DATABASE project3_team4;
CREATE USER main_project3_team4 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project3_team4 TO main_project3_team4;

                    CREATE TABLE project3_team4.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project3_team4 TO user_3;;
GRANT ALL PRIVILEGES ON DATABASE project3_team4 TO user_9;;
GRANT ALL PRIVILEGES ON DATABASE project3_team4 TO user_10;;
GRANT ALL PRIVILEGES ON DATABASE project3_team4 TO user_16;;
GRANT ALL PRIVILEGES ON DATABASE project3_team4 TO user_22;;
CREATE DATABASE project3_team5;
CREATE USER main_project3_team5 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project3_team5 TO main_project3_team5;

                    CREATE TABLE project3_team5.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project3_team5 TO user_4;;
GRANT ALL PRIVILEGES ON DATABASE project3_team5 TO user_5;;
GRANT ALL PRIVILEGES ON DATABASE project3_team5 TO user_11;;
GRANT ALL PRIVILEGES ON DATABASE project3_team5 TO user_17;;
GRANT ALL PRIVILEGES ON DATABASE project3_team5 TO user_23;;
CREATE DATABASE project4_team1;
CREATE USER main_project4_team1 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project4_team1 TO main_project4_team1;

                    CREATE TABLE project4_team1.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project4_team1 TO user_0;;
GRANT ALL PRIVILEGES ON DATABASE project4_team1 TO user_7;;
GRANT ALL PRIVILEGES ON DATABASE project4_team1 TO user_14;;
GRANT ALL PRIVILEGES ON DATABASE project4_team1 TO user_16;;
GRANT ALL PRIVILEGES ON DATABASE project4_team1 TO user_23;;
CREATE DATABASE project4_team2;
CREATE USER main_project4_team2 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project4_team2 TO main_project4_team2;

                    CREATE TABLE project4_team2.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project4_team2 TO user_1;;
GRANT ALL PRIVILEGES ON DATABASE project4_team2 TO user_8;;
GRANT ALL PRIVILEGES ON DATABASE project4_team2 TO user_10;;
GRANT ALL PRIVILEGES ON DATABASE project4_team2 TO user_17;;
GRANT ALL PRIVILEGES ON DATABASE project4_team2 TO user_24;;
CREATE DATABASE project4_team3;
CREATE USER main_project4_team3 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project4_team3 TO main_project4_team3;

                    CREATE TABLE project4_team3.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project4_team3 TO user_2;;
GRANT ALL PRIVILEGES ON DATABASE project4_team3 TO user_9;;
GRANT ALL PRIVILEGES ON DATABASE project4_team3 TO user_11;;
GRANT ALL PRIVILEGES ON DATABASE project4_team3 TO user_18;;
GRANT ALL PRIVILEGES ON DATABASE project4_team3 TO user_20;;
CREATE DATABASE project4_team4;
CREATE USER main_project4_team4 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project4_team4 TO main_project4_team4;

                    CREATE TABLE project4_team4.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project4_team4 TO user_3;;
GRANT ALL PRIVILEGES ON DATABASE project4_team4 TO user_5;;
GRANT ALL PRIVILEGES ON DATABASE project4_team4 TO user_12;;
GRANT ALL PRIVILEGES ON DATABASE project4_team4 TO user_19;;
GRANT ALL PRIVILEGES ON DATABASE project4_team4 TO user_21;;
CREATE DATABASE project4_team5;
CREATE USER main_project4_team5 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project4_team5 TO main_project4_team5;

                    CREATE TABLE project4_team5.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project4_team5 TO user_4;;
GRANT ALL PRIVILEGES ON DATABASE project4_team5 TO user_6;;
GRANT ALL PRIVILEGES ON DATABASE project4_team5 TO user_13;;
GRANT ALL PRIVILEGES ON DATABASE project4_team5 TO user_15;;
GRANT ALL PRIVILEGES ON DATABASE project4_team5 TO user_22;;
CREATE DATABASE project5_team1;
CREATE USER main_project5_team1 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project5_team1 TO main_project5_team1;

                    CREATE TABLE project5_team1.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project5_team1 TO user_0;;
GRANT ALL PRIVILEGES ON DATABASE project5_team1 TO user_8;;
GRANT ALL PRIVILEGES ON DATABASE project5_team1 TO user_11;;
GRANT ALL PRIVILEGES ON DATABASE project5_team1 TO user_19;;
GRANT ALL PRIVILEGES ON DATABASE project5_team1 TO user_22;;
CREATE DATABASE project5_team2;
CREATE USER main_project5_team2 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project5_team2 TO main_project5_team2;

                    CREATE TABLE project5_team2.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project5_team2 TO user_1;;
GRANT ALL PRIVILEGES ON DATABASE project5_team2 TO user_9;;
GRANT ALL PRIVILEGES ON DATABASE project5_team2 TO user_12;;
GRANT ALL PRIVILEGES ON DATABASE project5_team2 TO user_15;;
GRANT ALL PRIVILEGES ON DATABASE project5_team2 TO user_23;;
CREATE DATABASE project5_team3;
CREATE USER main_project5_team3 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project5_team3 TO main_project5_team3;

                    CREATE TABLE project5_team3.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project5_team3 TO user_2;;
GRANT ALL PRIVILEGES ON DATABASE project5_team3 TO user_5;;
GRANT ALL PRIVILEGES ON DATABASE project5_team3 TO user_13;;
GRANT ALL PRIVILEGES ON DATABASE project5_team3 TO user_16;;
GRANT ALL PRIVILEGES ON DATABASE project5_team3 TO user_24;;
CREATE DATABASE project5_team4;
CREATE USER main_project5_team4 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project5_team4 TO main_project5_team4;

                    CREATE TABLE project5_team4.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project5_team4 TO user_3;;
GRANT ALL PRIVILEGES ON DATABASE project5_team4 TO user_6;;
GRANT ALL PRIVILEGES ON DATABASE project5_team4 TO user_14;;
GRANT ALL PRIVILEGES ON DATABASE project5_team4 TO user_17;;
GRANT ALL PRIVILEGES ON DATABASE project5_team4 TO user_20;;
CREATE DATABASE project5_team5;
CREATE USER main_project5_team5 WITH ENCRYPTED PASSWORD 'all4cs3660';
GRANT ALL PRIVILEGES ON DATABASE project5_team5 TO main_project5_team5;

                    CREATE TABLE project5_team5.public.document_store (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        path VARCHAR(255) UNIQUE,
                        data JSONB,
                        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        db_user VARCHAR(255) DEFAULT user
                    );
GRANT ALL PRIVILEGES ON DATABASE project5_team5 TO user_4;;
GRANT ALL PRIVILEGES ON DATABASE project5_team5 TO user_7;;
GRANT ALL PRIVILEGES ON DATABASE project5_team5 TO user_10;;
GRANT ALL PRIVILEGES ON DATABASE project5_team5 TO user_18;;
GRANT ALL PRIVILEGES ON DATABASE project5_team5 TO user_21;;
