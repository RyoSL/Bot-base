const Discord = require("discord.js");
module.exports = {
        config: {
            name: "eval",
            aliases: ['ev'],
            description: "a",
            example: "a",
            usage: 'aa'
        },
        run: async (bot, message, args, string, member) => {
            message.delete()
        let entrada = args.join(' ')
        if (typeof code !== 'string')
        if (message.author.id !== '842621458403295262') return message.channel.send(`${message.author} | Apenas pessoas especiais podem utilizar este comando! D:`)
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new Discord.MessageEmbed()
                .setTitle('código executado com sucesso!')
                .addField("Entrada:", ` \`\`\`fix\n[ ${entrada} ]\`\`\` `) //(await eval(String))
                .addField("Saida:", ` \`\`\`fix\n[ ${(await data)} ]\`\`\` `)
                .addField("Tempo de Resposta:", ` \`\`\`fix\n[ ${Date.now() - message.createdTimestamp} ms]\`\`\` `)
                .addField("Tipo do Código:", ` \`\`\`fix\n[ ${data} ]\`\`\` `)
                message.channel.send(embed)
        }}
