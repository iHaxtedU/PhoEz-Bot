const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let who = message.mentions.users.first();
if (!who) return message.channel.send("User Not Found, Or Specified");
let roletogive = args[1];
if (!roletogive) return message.channel.send("Please Include The Role To Give After User");
let role = bot.roles.find('name', roletogive);
if (!role) return message.channel.send("Role Not Found");
  
who.giveRole(role);
message.channel.send(`Successfully Gave ${who} ${role}!`);

}

module.exports.help = {
  name: "giverole"
}
