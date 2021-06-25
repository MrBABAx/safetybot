const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "unbanall",
  aliases: ["unbandall"],
  description: "You can unban all the banned users",
  usage: ["s!unbanall"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "BAN_MEMBERS" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS" ],        
  ownerOnly: false,            
  cooldown: 6000,
  prime: true,
  run: async (bot, message, args, dev) => {

 if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`You don't have acces to run this command`));

    
    
message.guild.fetchBans().then(bans => {
      
        
          message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Are you sure to unban **${bans.size}** banned members on this server?`))
        
      })
      
  

        message.react('✅').then(r => {
                            message.react('⛔');
                    });
    
                    // First argument is a filter function
                    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '✅' || reaction.emoji.name == '⛔'),
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '✅') {
                                           message.guild.fetchBans().then(bans => {
      bans.forEach(banInfo => {
        message.guild.members.unban(banInfo.user);
      })
    });
              
                                    }
                                    else
                                            message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`The command was canceled`));
                            }).catch(() => {
                                    message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`The command was canceled because you don't reacted`));
                                 });  
   }
  }
