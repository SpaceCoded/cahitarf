const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('»  Cahit Arf Bot Komutları')
.setTimestamp()
.addField('» c!kimdir ','Cahit Arf')
.addField('» c!başarıları ','Cahit Arf')
.addField('» c!ünlüsözleri ','Cahit Arf')
.addField('» c!biyografisi ','Cahit Arf')
.addField('» c!arfdenklemleri ','Cahit Arf')




.setFooter(' 2021 CahitArf ', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'komutlar',
  description: 'Tüm komutları gösterir.',
  usage: ''
};