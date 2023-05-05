const Discord = require("discord.js");

module.exports = {
  name: "ban",
  description: "Ban un membre (car Meredith le déteste, attention à toi Karl)",
  permission: Discord.PermissionFlagsBits.BanMembers,
  dm: false,
  options: [
    {
      type: "user",
      name: "membre",
      description: "Le membre à bannir",
      required: true,
    },
    {
      type: "string",
      name: "raison",
      discription: "La raison du banissement",
      required: false,
    },
  ],

  async run(bot, message, args) {
    try {
      let user = await bot.users.fetch(args._hoistedOptions[0].value);
      if (!user) return message.reply("Vraiment, sans façon.");
      let member = message.guild.members.cache.get(user.id);

      let reason = agrs.get("raison");
      if (!reason)
        reason =
          "J'aimerai vraiment vous dire pourquoi. Mais j'ai une conscience professionnelle.";
    } catch (err) {
      return message.reply("Non, je n'en ai pas envie.");
    }
  },
};
