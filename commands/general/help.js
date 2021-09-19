const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color, Image, Footer, Author } = require("../../config.js");
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "To show you all command of the bot",
  usage: ["s!help","s!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let help = new Discord.MessageEmbed()
    .setColor(Color)
    .setAuthor(Author)
    .setImage(Image)
    .setDescription(`<@${bot.user.id}> a security bot to protection your server please use **s!help** followed by a command name to get more additional information on a command. For example: **s!help anti**\n\n__Prefix Information__\nPrefix: **s!**\nYou can also mention <@${bot.user.id}> to get prefix info`)
    .addField("General Section", "`invite`, `stats`, `serverinfo`, `ping`, `userinfo`, `bots`")
    .addField("Moderation Section", "`kick`, `ban`, `purge`, `unbanall`, `lock`, `unlock`, `lockall`, `unlockall`, `prefix`")
    .addField("Security Section", "`settings`, `punishment`, `whitelist`, `anti`")
    .setFooter(Footer)

      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=828270556758540348&permissions=8&scope=bot') 
       .setLabel('Click here to invite Whoami bot')

      
      let row1 = new MessageActionRow()
      .addComponents(button1)

   return message.channel.send(help,row1);
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "<:disable:840230135046471711> Disabled"
        if ( command.enabled ) {
        ccmd = "<:enable:840230134899671060> Enabled"
        }
      let help1 = new Discord.MessageEmbed()
     .setColor(Color) 
     .setThumbnail(message.author.avatarURL())
     .setTitle("**Help**")
     .setDescription(command.description || command.name + " this command don't have a description")
     .addField("**Usage**", "" + command.usage.join(", ") + "" )
     .addField("**Category**", "" + command.category.join(", ") + "" )
     .addField("**Command is**", ccmd);
      message.channel.send(help1)
        }
    }
  }};
