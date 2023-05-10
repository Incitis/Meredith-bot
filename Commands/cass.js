const Discord = require("discord.js");

module.exports = {
  name: "cass",
  description: "Meredith va encore casser du sucre.",
  permission: "Aucune",
  dm: true,

  async run(bot, message) {
    const phrases = [
      "Cassandre. Hmmm... Qui c'est déjà ?",
      "J'aurai bien besoin de potions, tiens.",
      "**regarde Cassandre de haut en bas, neutre** Oui, votre robe est magnifique. Mais parlons plutôt de magie drust.",
      "Cessez donc d'être curieuse, Cassandre. Je ne vous dirai rien.",
    ];

    // Sélectionne une phrase aléatoire du tableau
    const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];

    await message.reply(phraseAleatoire);
  },
};
