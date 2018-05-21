const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send("You successfully bought a common crate!")
}

module.exports.help = {
  name: "bcc"
}
