const Discord = require("discord.js");
module.exports = {
        config: {
            name: "ban",
            aliases: ['banir'],
            description: "bane um membro",
            example: "ban <@member/ID>",
            usage: 'ban @member'
        },
        run: async (bot, message, args) => {
            message.delete();
        }}