exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini$✨
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
♻ Command / Perintah :
         ───
         
╭───「 *Menu* 」
├≽ ️$sticker
├≽️ $pantun
├≽️ $quotes
├≽️ $foto cewek/cowok
├≽️ $tts
├≽️ $say
├≽️ $quran
├≽️ $twt
├≽️ $fb
├≽️ $ig
├≽️ $ytmp3
├≽️ $yt
├≽️ $wiki
├≽️ $lirik
├≽️ $nulis
├≽️ $sholat (nama daerahmu)
├≽️ $toxic (anjing)
├≽️ $fotoanime
├≽️ $covid
├≽️ $alay
├≽️ $nama
├≽️ $pasangan
├≽️ $owner
├≽️ $creator
├≽️ $cek
├≽️ #info
╰─────────
[ Keterangan ]
» $sticker Contoh: kirim gambar dengan caption $sticker
» $pantun Contoh: $pantun
» $quotes Contoh: $quotes
» $foto Contoh: $foto cowo
» $tts Contoh: $tts rahman gan (${BotName} akan mengirim link download)
» $say Contoh: $say halo rahman
» $quran Contoh: $quran
» $twt Contoh: $twt https://tweter.com/rahman-junior
» $fb Contoh: $fb https://facebook.com/abd rahman
» $ig Contoh: $ig https://instagram.com/raykon_45
» $ytmp3 Contoh: $ytmp3 https://youtu.be/dc ramon
» $yt Contoh: $yt https://youtu.be/dc ramon
» $wiki Contoh: $wiki Babi
» $lirik Contoh: $lirik
» $nulis Contoh: $nulis rahman juara
» $fotoanime Contoh: $fotoanime
» $covid Contoh: $covid
» $nama Contoh $nama rahman
» $pasangan Contoh: $pasangan rahman & Cahya
» #info Contoh: #info
 
 
├≽️💰 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS$
├≽️💰 MAU DONASI? SILAHKAN KETIK #donate
 
├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${instagramlu}
 
├───≽️「 *INFORMASI COVID-19 TERBARU$* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER$_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Modifikasi By Rahman ID* ‼️
├≽️📌 *Kalo ada bug maklumin yah* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️
├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *YouTube* : ${grupch2}
├≽️💥 *Instagram* : ${grupch3}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
