const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let money = JSON.parse(fs.readFileSync("../money.json" , "utf8"));
let wUser = message.author;


if(!money[wUser.id]) money[wUser.id] = {
      money: 0,
    };
let moneylevel = money[wUser.id] ? money[wUser.id].money : 0;
if(moneylevel < 25){

message.channel.send("You successfully did not buy a common crate!")
message.channel.send(`You need ${25 - moneylevel}$ to buy this!`)
  }
}

module.exports.help = {
  name: "bcc"
}
