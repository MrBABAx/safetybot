const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "scan",
  aliases: [],
  enabled: false,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args, dev) => {
    const { guild, channel } = message,
    kickData = [],
      banData = [],
      pruneData = [],
      safeData = [];
    guild.roles.cache.forEach(role => {
      if (channel.permissionsFor(role).has("KICK_MEMBERS") && channel.permissionsFor(role).has("BAN_MEMBERS")) {
        pruneData.push(role.id);
      } else if (channel.permissionsFor(role).has("KICK_MEMBERS")) {
        kickData.push(role.id);
      } else if (channel.permissionsFor(role).has()) {
        pruneData.push(role.id);
      } else {
        safeData.push(role.id);
      }
      const p = "";
      pruneData.forEach(pruneD => {
        p = p + "<@&" + pruneD + ">\n";
      })
      channel.send(p)
    })
  }
}