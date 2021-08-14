const Discord = require("discord.js");
module.exports = {
        config: {
            name: "leave",
            aliases: ['sair'],
            description: "sair de um server especifico",
            example: "leave",
            usage: 'leave'
        },
        run: async (client, message, args) => {
            message.delete()
            if (message.author.id !== '852704340526628934') return message.channel.send(`${message.author} | Apenas pessoas especiais podem utilizar este comando! D:`)

  const value = args[0];

  if (isNaN(value)) return message.reply("Apenas Números!");

  const guild = client.guilds.cache.get(args[0]);

  if (!guild) return message.reply("não conheço esse server!");
  else {
      message.reply("saindo do server...");
      return guild.leave();
  }
}}