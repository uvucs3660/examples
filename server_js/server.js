// npm install koa koa-router koa-static koa-cors pg mqtt
//
// path structure
// class/members
// class/team_roster
// presentation/projectX/teamY/
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
const { bodyParser } = require("@koa/bodyparser");
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const mqtt = require('mqtt');
const { load, save } = require('./store');

const app = new Koa();
const router = new Router();
const port = 3000;

// Connect to MQTT broker
const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('load/#');
  client.subscribe('save/#');
});

client.on('message', async (topic, message) => {
  const path = topic.split('/')[1];
  if (topic.startsWith('save/')) {
    const data = JSON.parse(message.toString());
    await save(path, data);
  } else if (topic.startsWith('load/')) {
    const result = await load(path);
    client.publish(`data/${path}`, JSON.stringify(result.rows));
  }
});

// Middleware
app.use(cors());
app.use(bodyParser());

// Routes
router.get('/data/:path*', async (ctx) => {
  let path = ctx.params.path;
  const result = await load(path);
  ctx.body = result.rows;
});

// Routes
router.post('/data/:path*', async (ctx) => {
  let path = ctx.params.path;
  const result = await save(path, ctx.request.rawBody);
  ctx.body = result.rows;
  ctx.body[0]['data'] = ctx.request.body;
});

app.use(router.routes()).use(router.allowedMethods());

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
