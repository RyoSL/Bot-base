const Discord = require("discord.js"); 

module.exports = {
  config: {
      name: "avatar",
      aliases: ['av'],
      description: "mostra o avatar",
      example: "avatar (@membro)",
      usage: 'avatar (@membro)>'
  },
  run: async (clinet, message, args) => {
    message.delete()
  let fulano = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let msg = new Discord.MessageEmbed() 
    .setColor('RANDOM') 
    .setTitle(fulano.tag) 
    .setImage(fulano.avatarURL({ dynamic: true, format: "png", size: 1024 })) 
    .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(msg);
  }
}