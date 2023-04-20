const Discord = require("discord.js");
const config = require("./config");
const bot = new Discord.Client({ intents: 3276799 });
const loadCommands = require("./Loaders/loadCommands");
const loadEvents = require("./Loaders/loadEvents");

bot.commands = new Discord.Collection();

bot.login(config.token);
loadCommands(bot);
loadEvents(bot);
