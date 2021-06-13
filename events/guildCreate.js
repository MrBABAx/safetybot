const Discord = require("discord.js")
module.exports = class {
 async run(guild, bot) {
 		const thanksEmbed = new Discord.MessageEmbed()			
                        .setAuthor("Thank you for adding me to your guild !")
 			.setDescription("To configure me,\n type **s!help** and look at the administration commands!.")
 			.setColor("BLACK")
 			.setTimestamp();
 		guild.owner.send(thanksEmbed).catch(() => {});


 		const text = "✅ **__Joined New Guild__** \n **Guild Name** = "+guild.name+" \n **Guild Owner Name** = " + `${guild.owner.user.username}` + " \n **Guild Owner ID** = " + `${guild.owner.id}` + "\n **Guild Member Size** = "+guild.memberCount+" \n **Guild Bots Size** ("+guild.members.cache.filter((m) => m.user.bot).size+" bots)";
 		const logsEmbed = new Discord.MessageEmbed()
 			.setColor("BLACK")
 			.setDescription(text);
 		bot.channels.cache.get("850465538306998272").send(logsEmbed);     
 }};
