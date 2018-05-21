const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let prize = Math.floor(Math.random()* 4 + 1)

message.channel.send(`${prize}`);
}

module.exports.help = {
  name: "buy common crate"
}
