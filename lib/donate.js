exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU DONASI ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨
         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╭───「 *Silahkan donasi dibawah ini* 」
├≽️⚜ *OVO*: 0812-8778-7370
├≽️⚜ *PULSA*: 0812-8778-7370 
├≽️⚜ *GOPAY*: 0812-8778-7370
├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${instagramlu}
 
├───≽️「 *INFORMASI COVID-19 TERBARU!* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Gunakan dengan bijak* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️
├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *YouTube* : ${grupch2}
├≽️💥 *Instagram* : ${grupch3}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
