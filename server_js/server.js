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

// api endpoint GET /data/path/to/data - takes a path and returns data
// api endpoint POST /data/path/to/data - takes a path and data and stores it

// ours
const { load, save } = require('./store');
// native
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
// KOA
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const cors = require('koa-cors');
const { bodyParser } = require("@koa/bodyparser");
// MQTT
const mqtt = require('mqtt');

// Talking to the mqtt proker
// Connect to MQTT broker
const client = mqtt.connect('mqtt://10.0.0.197');

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('load/#');
  client.subscribe('save/#');
});

client.on('message', async (topic, message) => {
  const path = topic.substring(topic.indexOf('/') + 1);
  if (topic.startsWith('save/')) {
    const data = JSON.parse(message.toString());
    await save(path, data);
  } else if (topic.startsWith('load/')) {
    const result = await load(path);
    client.publish(`data/${path}`, JSON.stringify(result.rows[0].data));
  }
});

//-------------------------------------------------------------------
// KOA Server Setup
//-------------------------------------------------------------------

const app = new Koa();
const router = new Router();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser());
app.use(serve("html"));

// Routes
router.get('/data/:path*', async (ctx) => {
  let path = ctx.params.path;
  const result = await load(path);
  ctx.body = result.rows[0].data;
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

/*
GET /mqtt.html HTTP/1.1

printf "%s\r\n" \
    "GET /need HTTP/1.1" \
    "Host: localhost" \
    "" |
nc localhost 3000

*/