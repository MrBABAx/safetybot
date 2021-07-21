const fs = require("fs");
const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons");
const { Color } = require("../../config.js");

module.exports = {
  name: "invite",
  aliases: ["invitelink"],
  description: "Use this command to get the invite link",
  usage: ["s!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {

   let kod1 = bot.makeid(6);

   let sorgu = new MessageButton()
    .setLabel(kod1)
    .setStyle("blurple")
    .setID(kod1)

const correctButton = new Discord.MessageEmbed()
	.setTitle("The correct button has been selected.").setColor("GREEN")
	.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
	.setDescription(`You have successfully bumped for server **${message.guild.name}**.`)
mesaage.channel.send(correctButton);

  /* const embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(bot.reva.get(data.lang, "general","invite"))
  .setDescription(`[Anti Vandalism Premium](https://discord.com/api/oauth2/authorize?client_id=813131436265046068&permissions=8&scope=bot)\n[Anti Vandalism](https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot)`)

 message.channel.send(embed);*/
     }
 }
