const Discord = require('discord.js')
const config = require('../../../config.json');
module.exports = async (client, ready) => {

  console.log(`conectado na conta ${client.user.tag}`);

  const status = [
    "idle",
    "dnd",
    "online"
  ]
  let member = client.users.cache.size
  
  const atividades = [
  [`Meu prefixo é: ${config.prefix}`, "PLAYING"],
  [`Meu Servidor atualmente está com ${member} membros.`, "PLAYING"]
  ]

  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await client.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 4000)

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
    await client.user.setStatus(status[b])
  }, 2500)

}

