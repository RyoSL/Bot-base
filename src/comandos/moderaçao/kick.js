const Discord = require('discord.js');
const db = require("quick.db");
module.exports = {
        config: {
            name: "kick",
            aliases: ['kickar'],
            description: "kickar um membro",
            example: "kick <@memro>",
            usage: 'kick @membro'
        },
        run: async (bot, message, args) => {
                message.delete()
        let chx = db.get(`punic_${message.guild.id}`);
        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "sem motivo";

        if (!message.member.hasPermission("KICK_MEMBERS")) {
                const embed = new Discord.MessageEmbed()
                .setColor('#000001')
                .setDescription(`${message.author} \n Você não possui permissão de \`KICK\` para executar esse comando!`)
                     return message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
                }


const embed = new Discord.MessageEmbed()
        .setTitle(`🪓 Você foi expulso!`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`🪓 Servidor: \`${message.guild.name}\`
         🪓 Motivo: ${reason}`)
        .setColor("YELLOW")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}));

        if (!args[0]) return message.channel.send(`:x: | ${message.author} Menciona alguém ou utilize o ID de  alguém para expulsar!`);

        if(!usu) return message.channel.send(`:x: | ${message.author} Você não mencionou e nem utilizou um ID válido!`);

        if(!usu.kickable) return message.channel.send(`:x: | ${message.author} Ops! Eu não tenho permissão para expulsar este membro!`);

        const ferinha = new Discord.MessageEmbed()
        .setTitle(`🪓 Expulsão!`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`🪓 Expulso: ${usu.user} (\`${usu.user.id}\`)
🪓 Motivo: \`${reason}\`
🪓 Por: ${message.author} (\`${message.author.id}\`) `)
        .setColor("YELLOW")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());
        
        
        await usu.kick({
            reason: `${message.author.tag} espulsou ${usu.user.id} com motivo ${reason}`
        });
        
        
        bot.channels.cache.get(chx).send(ferinha);
await usu.send(embed);
    }
}