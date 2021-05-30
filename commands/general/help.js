const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
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
  let embed = new Discord.MessageEmbed()
   .setColor(Color)
     .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
     .setTitle(bot.reva.get(data.lang, "general","help_embed"))
     .setDescription(`
[ Top.gg ](https://top.gg/bot/711328570374619207) - [ Invite ](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot) - [ Support ](https://discord.gg/SCvu2jCF7v) - [ Website ](https://zalmanti25.wixsite.com/my-site)
`)
     .addField("ℹ️ General", "`invite`, `support`, `about`, `userinfo`, `ping`, `serverinfo`, `bots`, `vote`")
     .addField("⚙️ Moderation", "`kick`, `ban`, `lock`, `unlock`, `lockall`, `unlockall`, `prefix`, `clear`, `unbanall`, `mute`, `lang`")
     .addField("🔨 Security", "`anti`, `settings`, `punishment`, `whitelist`")
  message.channel.send(embed)
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "<:disable:840230135046471711> Disabled"
        if ( command.enabled ) {
        ccmd = "<:enable:840230134899671060> Enabled"
        }
      let embed = new Discord.MessageEmbed()
      .setColor("BLUE") 
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Help**")
      .setDescription(command.description || command.name + " this command don't have a description")
      .addField("**Usage**", "" + command.usage.join(", ") + "" )
      .addField("**Category**", "" + command.category.join(", ") + "" )
      .addField("**Command is**", ccmd);
      message.channel.send(embed)
        }
    }
  }};
