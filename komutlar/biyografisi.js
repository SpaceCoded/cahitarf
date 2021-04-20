const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const engin= new Discord.MessageEmbed()
    
    .setDescription(`https://www.paste.tc/codeblack-1 Şifresi:12345678`)
    .setColor("RANDOM")
  message.channel.send(engin);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "biyografisi"
};