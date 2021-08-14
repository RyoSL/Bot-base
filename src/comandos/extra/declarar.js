const Discord = require("discord.js");
module.exports = {
        config: {
            name: "declarar",
            aliases: ['declarar'],
            description: "comando para se declarar para alguem",
            example: "declarar <@user> <mensagem>",
            usage: 'declarar @user eu te amo'
        },
        run: async (client, message, args) => {
            message.delete()
            let msg = message.channel
            let author = message.author
            let name = message.author.username
            
          let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
          if(!user) return msg.send(`${author} lembre-se de Dizer quem você quer se declarar`)
        
          let menssagem = args.slice(1).join(" ")
          if(!menssagem) return msg.send(`${author} Lembre-se de oque voce quer mandar para ${user.user.username}`)
        
        msg.send(`Sua menssagem foi enviada com sucesso para ${user.user.username}`)
        
          const declaração = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
          .setDescription(`Hey ${user} Sabia que ${name} te ama? se liga na menssagem que ele te mandou`)
          .addField(`${user.user.username}`, `${menssagem}`, true)
          .setFooter(`Menssagem enviada por ${name}`, author.displayAvatarURL({ dynamic: true }))
         user.send(declaração)
        }}