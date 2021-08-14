const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports = {
        config: {
            name: "guild",
            aliases: ['guilds', 'servers', 'server'],
            description: "a",
            example: "a",
            usage: 'aa'
        },
        run: async (bot, message, args, string, member) => {
            message.delete()
            if (message.author.id !== '852704340526628934') return message.channel.send(`${message.author} | Apenas pessoas especiais podem utilizar este comando! D:`)
            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setDescription(bot.guilds.cache.map(g => `**Nome:** ${g.name}\n**ID:** ${g.id}\n**Membros:** ${g.memberCount}`).join("\n\n"))
            const msg = await message.channel.send(embed)
            msg.delete({ timeout: 30000 })
}}