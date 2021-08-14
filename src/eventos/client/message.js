const Discord = require("discord.js");
const config = require('../../../config.json')
const db = require("quick.db");

module.exports = async (client, message) => {

  let prefix = config.prefix
  if (!message.content.startsWith(prefix)) {
    if(message.author.client) return;
  }

  if (!message.content.startsWith(prefix)) return;
 
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let arquivocmd = client.commands.get(command.slice(prefix.length)) ||
  client.commands.get(client.aliases.get(command.slice(prefix.length)))
  if (arquivocmd) arquivocmd.run(client, message, args);

  if(!arquivocmd) {
    message.reply(`o comando ` + "`" + messageArray.slice(0) + '` não foi encontrado na database do bot!')
	  message.delete()
  }
 
};
