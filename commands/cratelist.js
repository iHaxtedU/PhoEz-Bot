const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let cratelist = new Discord.RichEmbed()
.addField("⚪Common Crate⚪" , "25$");
message.channel.send(cratelist)
}

module.exports.help = {
  name: "cratelist"
}
