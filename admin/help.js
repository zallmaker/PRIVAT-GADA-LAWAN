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

// [ā] JANGAN DI RECODE SEMBARANGAN YA :( NTAR ERROR š

Object.keys(listmenu.utama).forEach((i) => {number++
Utama += `\nā[${number}]āŗ *${prefix}` + listmenu.utama[i] + "*"})

Object.keys(listmenu.anime.sfw).forEach((i) => {number++
animeSfw += `\nā[${number}]āŗ *${prefix}` + listmenu.anime.sfw[i] + "*"})

Object.keys(listmenu.anime.nsfw).forEach((i) => {number++
animeNsfw += `\nā[${number}]āŗ *${prefix}` + listmenu.anime.nsfw[i] + "*"})

Object.keys(listmenu.random).forEach((i) => {number++
Random += `\nā[${number}]āŗ *${prefix}` + listmenu.random[i] + "*"})

Object.keys(listmenu.creatif).forEach((i) => {number++
Creatif += `\nā[${number}]āŗ *${prefix}` + listmenu.creatif[i] + "*"})

Object.keys(listmenu.randomtag).forEach((i) => {number++
Randomtag += `\nā[${number}]āŗ *${prefix}` + listmenu.randomtag[i] + "*"})

Object.keys(listmenu.cek).forEach((i) => {number++
Cek += `\nā[${number}]āŗ *${prefix}` + listmenu.cek[i] + "*"})

Object.keys(listmenu.kerangajaib).forEach((i) => {number++
Kerangajaib += `\nā[${number}]āŗ *${prefix}` + listmenu.kerangajaib[i] + "*"})

Object.keys(listmenu.group).forEach((i) => {number++
Group += `\nā[${number}]āŗ *${prefix}` + listmenu.group[i] + "*"})

Object.keys(listmenu.storage).forEach((i) => {number++
Storage += `\nā[${number}]āŗ *${prefix}` + listmenu.storage[i] + "*"})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\nā[${number}]āŗ *${prefix}` + listmenu.owner[i] + "*"})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\nā[${number}]āŗ *${prefix}` + listmenu.owner[i] + "*"})


return `āāāāā[ *${namabot}* ]āāā
ā *Name* : ${m.messages[0].pushName}
ā *Tag* : @${sender.split("@")[0]}
ā *Emote* : ${cekUser("emote", sender)}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *UTAMA* ]āāā${Utama}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *ANIME(SFW)* ]āāā${animeSfw}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *ANIME(NSFW)* ]āāā${animeNsfw}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *RANDOM* ]āāā${Random}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *CREATIF* ]āāā${Creatif}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *RANDOMTAG* ]āāā${Randomtag}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *CEK* ]āāā${Cek}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *KERANG-AJAIB* ]āāā${Kerangajaib}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *GROUP* ]āāā${Group}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *STORAGE* ]āāā${Storage}
āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
āāāāā[ *OWNER* ]āāā${Owner}
āāāāāāāāāāāāāāāāā
`
}
