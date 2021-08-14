const Discord = require('discord.js');
const db = require("quick.db");
module.exports = {
    config: {
        name: "unban",
        aliases: ['urban'],
        description: "para desbanir um membro",
        example: "unban <@membro>",
        usage: 'unban @membro'
    },
    run: async (bot, message, args) => {
        message.delete()
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const embed = new Discord.MessageEmbed()
            .setColor('#000001')
            .setDescription(`${message.author} \n Você não possui permissão de \`BAN\` para executar esse comando!`)
                 return message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
            }
     let chx = db.get(`punic_${message.guild.id}`);
        let usu = args[0];

         if (!usu) return message.channel.send(`:x: | ${message.author} Utilize o ID de alguém para desbanir!`);

        message.guild.members.unban(usu);

        chx.send(`✅ | ${message.author}, o usuário <@${usu}> (\`${usu}\`) foi desbanido com sucesso!`)
    }
}