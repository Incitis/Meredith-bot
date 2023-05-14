const Discord = require("discord.js");

module.exports = {
  name: "maggy",
  description: "Pas touche à Maggy !",
  permission: "Aucune",
  dm: true,

  async run(bot, message) {
    const phrases = [
      "Vous ne trouvez pas que Margaret ressemble étrangement à ma créatrice ?",
      "Étrangement, je ne croise jamais Margaret.",
      "Nous savons tous que Margaret épouse Kaiser pour son fric.",
      "Ma créatrice me censure. Je ne peux pas dire tout ce que je voudrai au sujet de Margaret. **soupire** AIDEZ MOI BORDEL !",
    ];

    // Sélectionne une phrase aléatoire du tableau
    const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];

    await message.reply(phraseAleatoire);
  },
};
