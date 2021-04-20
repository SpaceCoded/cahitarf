const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.addField('» Cahit Arf 1910 yılında Selanik te doğdu.1932 yılında Galatasaray Lisesin de matematik öğretmenliği yapmıştır.','Cahit Arf')
.addField('» Cahit Arf 1933 yılında İstanbul Üniversitesi Fen Fakültesi nde profesör yardımcısı(doçent adayı)olmuştur. ','Cahit Arf')
.addField('» Cahit Arf Doktorasını 1938 yılında Almanya da Göttingen Üniversitesi nde tamamladı.','Cahit Arf')
.addField('» Cahit Arf 1943 te profesör 1955 te de ordinaryüs profösör oldu. ','Cahit Arf')
.addField('» Cahit Arf 1938 yılından beri cebir,sayılar teorisi,elastisite teorisi,analiz,geometri ve mühendislik matematiği temel katkılarda bulunmuştur ','Cahit Arf')
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
  name: 'kimdir',
  description: 'Tüm komutları gösterir.',
  usage: ''
};