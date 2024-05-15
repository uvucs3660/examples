// npm install koa koa-router koa-static koa-cors pg
//
// path structure
// class/members
// class/team_roster
// presentation/projectX/teamY
// gitstatus/projectX/teamY
// survey/projectX/teamY
// easywork/projectX/teamY
// grades/projectX/teamY
// each of these should return a json, when calling a get to /data

// api endpoint GET /data - takes a path and returns data
// api endpoint POST /data - takes a path and data and stores it

const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const cors = require('koa-cors');
const path = require('path');
const { Pool } = require('pg');
const fs = require('fs');
const { execSync } = require('child_process');

const app = new Koa();
const router = new Router();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.CLASS_DB_URL
});

// Middleware
app.use(cors());

// Routes
router.get('/data', async (ctx) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM document_store where path = $1', ctx.query.path);
    ctx.body = result.rows;
  } finally {
    client.release();
  }
});

// Routes
router.post('/data', async (ctx) => {
  const client = await pool.connect();
  try {
    const result = await client.query(`
        insert into document_store (path, data) values ($1, $2)
        on conflict (path) do update set data = $2 returning path;`,
        ctx.request.body.path,
        ctx.request.body.data);
    ctx.body = result.rows;
  } finally {
    client.release();
  }
});

app.use(router.routes()).use(router.allowedMethods());

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
