const Discord = require("discord.js");

module.exports = {
  name: "adrian",
  description: "Meredith donne son avis sur son ami Adrian",
  permission: "Aucune",
  dm: true,

  async run(bot, message) {
    const phrases = [
      "Adrian, tu veux encore faire un tour dans la cave, c'est ça ?",
      "Elles ne veulent pas de toi, cesse donc de perdre ton temps ! Allons dans la cave.",
      "**toussote doucement, puis lève les yeux vers Adrian** Je suis certaine que tu pourrais me surprendre.",
      "Thomas ? Ah non, Adrian.",
    ];

    // Sélectionne une phrase aléatoire du tableau
    const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];

    await message.reply(phraseAleatoire);
  },
};
