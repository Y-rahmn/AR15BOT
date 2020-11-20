exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU DONASI ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╭───「 *Silahkan donasi dibawah ini* 」

├≽️⚜ *OVO*: 081287787370 
├≽️⚜ *PULSA*: 081287787370 
├≽️⚜ *GOPAY*: 081287787370 

├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${raykon_45}
 
├───≽️「 *INFORMASI COVID-19 TERBARU!* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${081287787370}*
 
├≽️📌 *Gunakan dengan bijak* ‼️
├≽️📌 *Bot ini berjalan ${24 jam}* ‼️


├≽️💥 *Group WhatsApp* ; ${https://chat.whatsapp.com/IEvKZ7MxwxF79f5TRDdkgs}
├≽️💥 *YouTube* : ${https://www.youtube.com/channel/UC97YO6MSf1v804PE8DRmcYQ}
├≽️💥 *Instagram* : ${https://www.instagram.com/p/CHurMmjjPKG/?igshid=d15gklwhfmhb}
 
 
├≽️   🐼*MADE BY ${BotName}*🐼
╰ ───`
}
