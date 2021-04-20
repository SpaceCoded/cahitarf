const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const engin= new Discord.MessageEmbed()
    .setDescription(`Cahit Arf;

    ⇒  Arf değişmezi, Arf halkaları ve Arf kapanışları terimlerini bulmuş, Matematik bilimine kazandırmıştır.
    
    ⇒ “Hasse-Arf Teoremi” adı ile anılan teoremi matematik bilimine kazandırmıştır.
    
    ⇒ Sentetik geometri problemlerinin cetvel ve pergel yardımıyla çözülebilirliği konusunda araştırmaları ve çalışmaları vardır.
    
    Cahit ARF'in kazandığı ödülleri öğrenelim ve yazalım;
    
    ⇒ 1948 İnönu Armağanı
    
    ⇒ Akademik Palmiye Madalyası
    
    ⇒ TUBİTAK Science Awards for Mathematics 1974
    
    Cahit Arf, Türk matematikçi ve aynı zamanda bilim insanıdır. Kendisi oldukça zeki ve akıllıdır.
    
    ⇒ Tübitak bilim kolunun eski başkanıdır.
    
    ⇒ Günümüzde kullandığımız 10 tl'lik Türk lirasının, arka tarafında Cahit Arf'in resmi vardır.
    
    ⇒ 1910 senesinde Selanik'te dünyaya geldi. İlkokul 5. sınıfa giderken ailesi ile birlikte İzmir'e yerleşti. Eğitimine Fransa’daki St. Louis Lisesi'nde devam etti.
    
    ⇒ İstanbul'da Galatasaray Lisesi'nde Matematik öğretmenliği yaptı.`)
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
  name: "başarıları"
};