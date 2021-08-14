const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
        config: {
            name: "clear",
            aliases: ['purge', 'limpar'],
            description: "apagar quantidade grande de mensagens",
            example: "clear 10",
            usage: 'clear 100'
        },
        run: async (bot, message, args) => {
            
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                const embed = new Discord.MessageEmbed()
                .setColor('#000001')
                .setDescription(`${message.author} \n Você não possui permissão de \`Gerencia mensagens\` para executar esse comando!`)
                     return message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
                }
        if (!args[0]) {
            return message.channel.send(`escolha um numero de 1 a 1000`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 1000 ) {
            deleteAmount = 1000;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`apagado com sucesso ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
    }
}