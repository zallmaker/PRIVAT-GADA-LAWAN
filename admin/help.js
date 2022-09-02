exports.allmenu = (prefix, namabot, sender, cekUser, m, listmenu, storage) => {

var Utama = ""
var animeSfw = ""
var animeNsfw = ""
var Random = ""
var Creatif = ""
var Randomtag = ""
var Cek = ""
var Kerangajaib = ""
var Group = ""
var Storage = ""
var Owner = ""
 let number = 0

// [❗] JANGAN DI RECODE SEMBARANGAN YA :( NTAR ERROR 😄

Object.keys(listmenu.utama).forEach((i) => {number++
Utama += `\n║[${number}]➺ *${prefix}` + listmenu.utama[i] + "*"})

Object.keys(listmenu.anime.sfw).forEach((i) => {number++
animeSfw += `\n║[${number}]➺ *${prefix}` + listmenu.anime.sfw[i] + "*"})

Object.keys(listmenu.anime.nsfw).forEach((i) => {number++
animeNsfw += `\n║[${number}]➺ *${prefix}` + listmenu.anime.nsfw[i] + "*"})

Object.keys(listmenu.random).forEach((i) => {number++
Random += `\n║[${number}]➺ *${prefix}` + listmenu.random[i] + "*"})

Object.keys(listmenu.creatif).forEach((i) => {number++
Creatif += `\n║[${number}]➺ *${prefix}` + listmenu.creatif[i] + "*"})

Object.keys(listmenu.randomtag).forEach((i) => {number++
Randomtag += `\n║[${number}]➺ *${prefix}` + listmenu.randomtag[i] + "*"})

Object.keys(listmenu.cek).forEach((i) => {number++
Cek += `\n║[${number}]➺ *${prefix}` + listmenu.cek[i] + "*"})

Object.keys(listmenu.kerangajaib).forEach((i) => {number++
Kerangajaib += `\n║[${number}]➺ *${prefix}` + listmenu.kerangajaib[i] + "*"})

Object.keys(listmenu.group).forEach((i) => {number++
Group += `\n║[${number}]➺ *${prefix}` + listmenu.group[i] + "*"})

Object.keys(listmenu.storage).forEach((i) => {number++
Storage += `\n║[${number}]➺ *${prefix}` + listmenu.storage[i] + "*"})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\n║[${number}]➺ *${prefix}` + listmenu.owner[i] + "*"})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\n║[${number}]➺ *${prefix}` + listmenu.owner[i] + "*"})


return `╔════[ *${namabot}* ]═══
║ *Name* : ${m.messages[0].pushName}
║ *Tag* : @${sender.split("@")[0]}
║ *Emote* : ${cekUser("emote", sender)}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *UTAMA* ]═══${Utama}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *ANIME(SFW)* ]═══${animeSfw}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *ANIME(NSFW)* ]═══${animeNsfw}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *RANDOM* ]═══${Random}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *CREATIF* ]═══${Creatif}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *RANDOMTAG* ]═══${Randomtag}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *CEK* ]═══${Cek}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *KERANG-AJAIB* ]═══${Kerangajaib}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *GROUP* ]═══${Group}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *STORAGE* ]═══${Storage}
╚════════════════
▻►▻►▻►▻►▻►▻►▻►▻►
╔════[ *OWNER* ]═══${Owner}
╚════════════════
`
}
