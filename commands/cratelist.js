const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let cratelist = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setColor("#ff2dc3")
.addField(":ballot_box: Common Crate :ballot_box:", "$25");

message.channel.send(cratelist)
}

module.exports.help = {
  name: "cratelist"
}
