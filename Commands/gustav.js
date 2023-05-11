const Discord = require("discord.js");

module.exports = {
  name: "gustav",
  description: "Des infos sur Gustav ? Je suis preneuse.",
  permission: "Aucune",
  dm: true,

  async run(bot, message) {
    const phrases = [
      "Je ne sais vraiment pas ce que Kaiser trouve à ce petit rat roux.",
      "Cessez donc, Gustav. Je ne m'intéresse qu'à votre porte-feuille. Et toutes informations que vous pourriez me donner. **sourit en coin**",
      "Gustav, vous savez aussi bien que moi que nous serions un duo formidable...",
      "J'aimerai connaître le moindre de vos secrets. Cette aura que vous dégagez m'obsède.",
      "Vous savez, je peux payais les informations de plusieurs façons. Je sais bien que mon argent ne vous intéresse pas. **joue des sourcils**",
      "Arrêtez de protéger cet ignare !",
    ];

    // Sélectionne une phrase aléatoire du tableau
    const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];

    await message.reply(phraseAleatoire);
  },
};
