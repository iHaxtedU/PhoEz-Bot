const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix)) return;
message.channel.send(`Test was successful`);
}

module.exports.help = {
  name: "test"
}
