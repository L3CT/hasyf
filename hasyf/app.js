const { Client, Collection } = require("discord.js");
const sqlite3 = require('sqlite3').verbose();
const config = require("./config.json");
const client = new Client({
    disableMentions: 'everyone'
});
client.config = config;
client.db = new sqlite3.Database('./database.db');

["commands", "aliases"].forEach(x => (client[x] = new Collection()));

["./handlers/event.js"].forEach(x => require(x)(client));

client.login(config.token);
