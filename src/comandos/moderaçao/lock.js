const Discord = require("discord.js");

module.exports = {
        config: {
            name: "lock",
            aliases: ['fechar'],
            description: "fechar um canalo",
            example: "lock",
            usage: 'lock'
        },
        run: async (bot, message, args) => {
            message.delete()            
            if (!message.member.hasPermission("MANAGE_CHANNELS")) {
              const embed = new Discord.MessageEmbed()
              .setColor('#000001')
              .setDescription(`${message.author} \n Você não possui permissão de \`Gerencia canais\` para executar esse comando!`)
                   return message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
              }
  if (!bot.lockit) bot.lockit = [];
if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
  let rr = new Discord.MessageEmbed()
  .setDescription("**❌ Eu não possuo a permissão de `Gerenciar Canais` para executar este comando**")
  .setColor("RANDOM")
  
  return message.channel.send(rr)
}
  
  
  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false 
    })
    const ebd = new Discord.MessageEmbed()
    .setTitle(`Este canal foi bloqueado por  ${message.author.username} `)
    .setDescription("você pode finalisar o bloqueio digitando !unlock ou reagindo no cadeado.")
    .setColor("RANDOM")
      message.channel.send(ebd).then(msg => {
        msg.react("🔒")
        
        const filtro = (reacao, usuario) => reacao.emoji.name === "🔒" && usuario.id === message.author.id;
const coletor = msg.createReactionCollector(filtro);

coletor.on('collect', () => {

let ebd2 = new Discord.MessageEmbed()
.setTitle(`Este canal foi desbloqueado por  ${message.author.username}`)
.setColor("RANDOM")

msg.edit(ebd2);

if (!bot.lockit) bot.lockit = [];
if (!message.member.roles.cache.has("853842892178980874")) {
  let ro = new Discord.MessageEmbed()
  .setDescription("**Você não tem permição para isso**")
  .setColor("RANDOM")
  
  return message.channel.send(ro)
}

if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
  let re = new Discord.MessageEmbed()
  .setDescription("Eu não possuo a permissão de `Gerenciar Canais` para executar este comando")
  .setColor("RANDOM")
  
  return message.channel.send(re)
}

message.channel.createOverwrite(message.guild.id, {
SEND_MESSAGES: null
})
})
}
  )}};