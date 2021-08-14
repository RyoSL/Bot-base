const Discord = require("discord.js");
module.exports = {
        config: {
            name: "leave",
            aliases: ['sair'],
            description: "sair de todos os servers",
            example:"leave",
            usage: 'leave'
        },
        run: async (client, message, args) => {
            message.delete()
            if (message.author.id !== '852704340526628934') return message.channel.send(`${message.author} | Apenas pessoas especiais podem utilizar este comando! D:`)
            const guilds = client.guilds.cache.map(a => a.id)
for (let i = 0; i < guilds.length; i++) { 

let servidor = client.guilds.cache.get(guilds[i])

servidor.leave()
}}}
