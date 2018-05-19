const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send(`Test was successful`);
}

module.exports.help = {
  name: "test"
}
