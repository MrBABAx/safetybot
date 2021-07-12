const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antibot",
  aliases: ["anti-bot"],
  description: "Prevent others from adding bots to your server",
  usage: ["s!antibot [on/off]"],
  category: ["Security"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {
  
   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1];
    if (args[1] === "on") {
      guild.bot.onoff = "on";
      guild.save();
        const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:true:854842599444709386> The **AntiBot** system is enabled correctly!`);
     return message.channel.send(embed);
     } else if (args[1] === "off") {
         guild.bot.onoff = "off";
         guild.save();
        const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:false:854842600351334440> The **AntiBot** system is disabled correctly!`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`error syntax <a:false:854842600351334440>\n ${guild.prefix}antibot [on,off]`
        );
      return message.channel.send(embed2);
  }
};
