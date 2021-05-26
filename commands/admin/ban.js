const Discord = require('discord.js')
const { MessagEmbed } = require("discord.js");
module.exports = {
    name: "ban",
    aliases: ["band"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, args, message, dev) => {
    const member = this.getMemberFromMention(message, args[0]) || message.guild.members.cache.get(args[0]);
    if (!member)
      return this.sendErrorMessage(message, 0, 'Please mention a user or provide a valid user ID');
    if (member === message.member)
      return this.sendErrorMessage(message, 0, 'You cannot ban yourself'); 
    if (member.roles.highest.position >= message.member.roles.highest.position)
      return this.sendErrorMessage(message, 0, 'You cannot ban someone with an equal or higher role');
    if (!member.bannable)
      return this.sendErrorMessage(message, 0, 'Provided member is not bannable');

    let reason = args.slice(1).join(' ');
    if (!reason) reason = '`None`';
    if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
    
    await member.ban({ reason: reason });

    const embed = new MessageEmbed()
      .setTitle('Ban Member')
      .setDescription(`${member} was successfully banned.`)
      .addField('Moderator', message.member, true)
      .addField('Member', member, true)
      .addField('Reason', reason)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("");
    message.channel.send(embed);
    }
}
