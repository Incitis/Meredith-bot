const Discord = require("discord.js");
const loadSlashCommand = require("../Loaders/LoadSlashCommands");

module.exports = async (bot) => {
  await loadSlashCommand(bot);

  console.log(`${bot.user.tag} is online.`);
};
