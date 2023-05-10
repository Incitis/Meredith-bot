const Discord = require("discord.js");

module.exports = {
  name: "fitz",
  description: "Meredith adore discuter avec son prêtre préféré.",
  permission: "Aucune",
  dm: true,

  async run(bot, message) {
    const phrases = [
      "Fitz ? Vous voulez dire Fitzgerald Jansen ? J'ai un tas d'informations sur ce rat.",
      "Ah, Fitz ! Contre une belle somme, je suis prête à vous le livrer en cage.",
      "Regardez le... **observe Fitzgerald de loin** Aucune allure.",
      "Fitzgerald, mon chéri. Tu veux faire un tour dans ma chambre ?",
    ];

    // Sélectionne une phrase aléatoire du tableau
    const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];

    await message.reply(phraseAleatoire);
  },
};
