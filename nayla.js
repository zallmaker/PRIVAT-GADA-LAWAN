"use strict";
const {
downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./db/function/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("./db/function/myfunc");
const fs = require ("fs");
const util = require('util')
const RA = require('ra-api')    
const request = require('request');
const chalk = require('chalk');
const ffmpeg = require("fluent-ffmpeg");
const hx = require('hxz-api');
const moment = require("moment-timezone");
const listmenu = JSON.parse(fs.readFileSync('./admin/listmenu.json')); 
const { exec, spawn } = require("child_process");
const setting = JSON.parse(fs.readFileSync('./admin/config.json')); 
const daftar = JSON.parse(fs.readFileSync('./db/function/daftar.json')); 
const storage = JSON.parse(fs.readFileSync('./db/function/storage.json')); 
const speed = require("performance-now");
const Exif = require("./db/function/exif")
const antilink = JSON.parse(fs.readFileSync('./db/function/antilink.json')); 
const welcome = JSON.parse(fs.readFileSync('./db/function/welcome.json')); 
const exif = new Exif()
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(nayla, nay, m, setting, store) => {
try {
let { ownerNumber, namabot, namaowner } = setting
let { allmenu } = require('./admin/help')

const { type, quotednay, mentioned, now, fromMe } = nay
if (nay.isBaileys) return
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(nay.message)
const from = nay.key.remoteJid
const chats = (type === 'conversation') ? nay.message.conversation : (type == 'imageMessage') ? nay.message.imageMessage.caption : (type == 'videoMessage') ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') ? nay.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const toJSON = j => JSON.stringify(j, null,'\t')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = nay.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid
const isOwner = ownerNumber == sender ? true : ["6282347260729@s.whatsapp.net","6283856085455@s.whatsapp.net","6285607859362@s.whatsapp.net"].includes(sender) ? true : false
const pushname = nay.pushName
const body = chats.startsWith(prefix) ? chats : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;

const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net'
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
 
const isAntilink = antilink.includes(from) ? true : false
//const isWelcome = welcome.includes(from) ? true : false


const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
function jsonformat(string) {return JSON.stringify(string, null, 2)}
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = nayla.sendMessage(from, { text: teks, mentions: mems })
return res } else { let res = nayla.sendMessage(from, { text: teks, mentions: mems }, { quoted: nay })
return res}}
const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	

const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: jam + ' WIB', vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}
 
const reply = (teks) => {nayla.sendMessage(from, { text: teks, mentions:[sender] }, { quoted: nay1 })}
const sendMess = (hehe, teks) => {nayla.sendMessage(hehe, { text, teks })}
 
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
 
const cekUser = (satu, dua) => { 
let x1 = false
Object.keys(daftar).forEach((i) => {
if (daftar[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return daftar[x1].id } 
if (satu == "emote"){ return daftar[x1].emote } 
if (satu == "ban"){ return daftar[x1].ban } 
} 
if (x1 == false) { return null } 
} 
const setUser = (satu, dua, tiga) => { 
Object.keys(daftar).forEach((i) => {
if (daftar[i].id == dua){
if (satu == "±id"){ daftar[i].id = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±emote"){ daftar[i].emote = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±ban"){ daftar[i].ban = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
}})
}
function _0x5e93(){var _0x5d80a6=['[\x20*DELETE-','aqBrI','VShRY','uhYFZ','n\x20anda\x20unb','pOJKF','D*\x20]','ZhKfb','geoyv','zPJfl','tPTVd','[\x20*UNBAN-U','MSG*\x20]','push','YPODl','189976ndbMpn','UyhnW','cmd','FhZQi','g\x20yang\x20aka','qVpbI','KpWCY','Loading...','ban\x20','GOGdf','26265NQMqVV','231ovsPRB','YipwV','Tidak\x20ada\x20','cek','DWSPu','\x20msg\x20kamu\x20','jDcdp','4|2|1|0|3','OPEN','length','delete','KBrBG','yWfUw','6QckivN','saoUu','hEnKA','sendMessag','G*\x20]','OfeHC','JpJLZ','3480162sLWSmc','8798205kdOKXq','jRRys','unban\x20','sSXwI','n\x20anda\x20ban','fitur','DlYvf','unban','cnwsI','nLTHy','yUney','poyPZ','MVOEL','apa\x20apa\x20di','6gOKvUR','OWFyq','SER*\x20]','[\x20*LIST-CM','BeRrW','mPFga','56DVmzvL','Tambah\x20kan','keys','fgHJf','sini','gyTek','gEMIA','YZztm','IhNAR','get','eEKyP','etLNX','deletemsg\x20','forEach','CtoZD','ban','gettcmd\x20','JCnch','dLPFh','eDret','di\x20command','zHYmP','FaRPa','Eptjd','6059230gqNkDg','\x20#addmsg','321969iPHeVG','AHshj','fwdsu','split','261zFUIsY','msg','getmsg\x20','ruPlY','ZCWSY','Pilih\x20oran','*Total*\x20:\x20','[\x20*LIST-MS','3492012OYHsrr','R*\x20]','sini,\x20Ayo\x20','jdmPW','nQTos','mess','AGEJn','[\x20*BAN-USE'];_0x5e93=function(){return _0x5d80a6;};return _0x5e93();}function _0x4b2f(_0x40d64d,_0x3aaa01){var _0x2f35fa=_0x5e93();return _0x4b2f=function(_0x53c406,_0x4263ba){_0x53c406=_0x53c406-(0x1b7*-0xf+-0x18d0+0x3312);var _0x3a0075=_0x2f35fa[_0x53c406];return _0x3a0075;},_0x4b2f(_0x40d64d,_0x3aaa01);}(function(_0x4f2953,_0x94e76){var _0x2cb228=_0x4b2f,_0xdf3351=_0x4f2953();while(!![]){try{var _0x43e2ec=parseInt(_0x2cb228(0x9d))/(0xace+0x29*0x9b+-0x23a0)*(-parseInt(_0x2cb228(0xab))/(0x21b6+0x2530+0xd*-0x574))+parseInt(_0x2cb228(0xe1))/(-0x12eb+0xa61*0x1+-0x1*-0x88d)*(-parseInt(_0x2cb228(0xc7))/(0x1f6f+0x21*-0xed+-0xde))+parseInt(_0x2cb228(0xb3))/(0xce1+-0x45*0x45+0x5bd)*(-parseInt(_0x2cb228(0xc1))/(-0x22d*-0x1+0x1d8b+0x1fb2*-0x1))+-parseInt(_0x2cb228(0xb2))/(-0x1a7c+0x1*-0x85+0x1b08)+parseInt(_0x2cb228(0x93))/(0x17e*-0x11+0x644*-0x5+-0x38ba*-0x1)*(-parseInt(_0x2cb228(0xe5))/(-0x19c4+-0x13b+0x1b08))+-parseInt(_0x2cb228(0xdf))/(-0xdba*0x2+0x23c1+-0x843)+-parseInt(_0x2cb228(0x9e))/(0x1138+-0x9d+0x8*-0x212)*(-parseInt(_0x2cb228(0xed))/(-0x1*0x24e6+0xd*0x4f+-0x20ef*-0x1));if(_0x43e2ec===_0x94e76)break;else _0xdf3351['push'](_0xdf3351['shift']());}catch(_0x27461c){_0xdf3351['push'](_0xdf3351['shift']());}}}(_0x5e93,-0x114ab4+-0x61b3*-0x35+0xbfe2c));const cekBan=_0x39b865=>{var _0x5ba18a=_0x4b2f,_0x5cc9fc={'YipwV':_0x5ba18a(0xa5),'ruPlY':function(_0x52f9ec,_0xdf8222){return _0x52f9ec==_0xdf8222;},'KBrBG':_0x5ba18a(0xd6),'DWSPu':_0x5ba18a(0x9a),'YZztm':_0x5ba18a(0xf4)+_0x5ba18a(0xee),'VShRY':_0x5ba18a(0xa6),'zHYmP':_0x5ba18a(0xba),'AGEJn':function(_0xe2a8e,_0x1d736c){return _0xe2a8e(_0x1d736c);},'nLTHy':_0x5ba18a(0xa0)+_0x5ba18a(0xc0)+_0x5ba18a(0xcb),'gyTek':_0x5ba18a(0x8f)+_0x5ba18a(0xc3),'sSXwI':function(_0x26c0d7,_0x50d106){return _0x26c0d7==_0x50d106;},'BeRrW':function(_0x4fcb25,_0x46d78f){return _0x4fcb25+_0x46d78f;},'eDret':_0x5ba18a(0x9b),'FaRPa':function(_0x50db41,_0x1cc868){return _0x50db41+_0x1cc868;},'GOGdf':function(_0x580277,_0x170573){return _0x580277+_0x170573;},'Eptjd':_0x5ba18a(0xb5)},_0x54a220=_0x5cc9fc[_0x5ba18a(0x9f)][_0x5ba18a(0xe4)]('|'),_0x3f5c04=-0x1721*0x1+-0x45a+0x1b7b;while(!![]){switch(_0x54a220[_0x3f5c04++]){case'0':_0x5cc9fc[_0x5ba18a(0xe8)](_0x39b865,_0x5cc9fc[_0x5ba18a(0xa9)])&&nayla[_0x5ba18a(0xae)+'e'](from,{'text':_0x5ba18a(0xea)+_0x5ba18a(0x97)+_0x5ba18a(0xb7),'footer':_0x5cc9fc[_0x5ba18a(0xa2)],'title':_0x5cc9fc[_0x5ba18a(0xce)],'buttonText':_0x5cc9fc[_0x5ba18a(0xf7)],'sections':[{'rows':_0x1eb76e}]});continue;case'1':Object[_0x5ba18a(0xc9)](daftar)[_0x5ba18a(0xd4)](_0x217573=>{var _0x5b0fa2=_0x5ba18a;_0xc160cf[_0x5b0fa2(0x94)](_0x39b865,_0xc160cf[_0x5b0fa2(0x8d)])&&(_0xc160cf[_0x5b0fa2(0x94)](daftar[_0x217573][_0x5b0fa2(0xd6)],![])&&_0x1eb76e[_0x5b0fa2(0x91)]({'title':daftar[_0x217573]['id'],'rowId':_0xc160cf[_0x5b0fa2(0xb4)](_0xc160cf[_0x5b0fa2(0xad)](prefix,_0xc160cf[_0x5b0fa2(0xcd)]),daftar[_0x217573]['id'])})),_0xc160cf[_0x5b0fa2(0x94)](_0x39b865,_0xc160cf[_0x5b0fa2(0xe3)])&&(_0xc160cf[_0x5b0fa2(0x94)](daftar[_0x217573][_0x5b0fa2(0xd6)],!![])&&_0x1eb76e[_0x5b0fa2(0x91)]({'title':daftar[_0x217573]['id'],'rowId':_0xc160cf[_0x5b0fa2(0xd9)](_0xc160cf[_0x5b0fa2(0x89)](prefix,_0xc160cf[_0x5b0fa2(0xd8)]),daftar[_0x217573]['id'])}));});continue;case'2':var _0x1eb76e=[];continue;case'3':if(_0x5cc9fc[_0x5ba18a(0xe8)](_0x39b865,_0x5cc9fc[_0x5ba18a(0xdc)])){if(_0x5cc9fc[_0x5ba18a(0xe8)](_0x1eb76e[_0x5ba18a(0xa7)],-0x107b+0xc*-0xf2+-0x1*-0x1bd3))return _0x5cc9fc[_0x5ba18a(0xf3)](reply,_0x5cc9fc[_0x5ba18a(0xbc)]);nayla[_0x5ba18a(0xae)+'e'](from,{'text':_0x5ba18a(0xea)+_0x5ba18a(0x97)+_0x5ba18a(0xf9)+'an','footer':_0x5cc9fc[_0x5ba18a(0xa2)],'title':_0x5cc9fc[_0x5ba18a(0xcc)],'buttonText':_0x5cc9fc[_0x5ba18a(0xf7)],'sections':[{'rows':_0x1eb76e}]});}continue;case'4':var _0xc160cf={'UyhnW':function(_0x2bacf4,_0x2b5858){var _0x33a2b9=_0x5ba18a;return _0x5cc9fc[_0x33a2b9(0xb6)](_0x2bacf4,_0x2b5858);},'zPJfl':_0x5cc9fc[_0x5ba18a(0xa9)],'jRRys':function(_0x4704c8,_0x1210ec){var _0x153cb4=_0x5ba18a;return _0x5cc9fc[_0x153cb4(0xc5)](_0x4704c8,_0x1210ec);},'hEnKA':function(_0x2c4f00,_0x246b63){var _0x270d29=_0x5ba18a;return _0x5cc9fc[_0x270d29(0xc5)](_0x2c4f00,_0x246b63);},'gEMIA':_0x5cc9fc[_0x5ba18a(0xda)],'fwdsu':_0x5cc9fc[_0x5ba18a(0xdc)],'dLPFh':function(_0x4301a7,_0x284ec2){var _0x49b328=_0x5ba18a;return _0x5cc9fc[_0x49b328(0xdd)](_0x4301a7,_0x284ec2);},'pOJKF':function(_0x199597,_0x97d091){var _0x16b240=_0x5ba18a;return _0x5cc9fc[_0x16b240(0x9c)](_0x199597,_0x97d091);},'JCnch':_0x5cc9fc[_0x5ba18a(0xde)]};continue;}break;}},cekStorage=(_0x1ec328,_0x451f9d,_0x375367,_0x12e837)=>{var _0xe541b1=_0x4b2f,_0x543747={'FhZQi':function(_0x46162a,_0x12ee69){return _0x46162a==_0x12ee69;},'jDcdp':_0xe541b1(0xa1),'uhYFZ':function(_0x177cd9,_0x50ce6e){return _0x177cd9+_0x50ce6e;},'yWfUw':_0xe541b1(0xe7),'KpWCY':_0xe541b1(0xa8),'fgHJf':function(_0x1f56d7,_0x2ddb6e){return _0x1f56d7+_0x2ddb6e;},'jdmPW':_0xe541b1(0xd3),'OfeHC':function(_0x560cb8,_0x5932a3){return _0x560cb8==_0x5932a3;},'IhNAR':function(_0xcf5b28,_0x590faa){return _0xcf5b28+_0x590faa;},'CtoZD':_0xe541b1(0xd7),'JpJLZ':_0xe541b1(0xd0),'AHshj':function(_0x24d54f,_0x3ecfe6){return _0x24d54f==_0x3ecfe6;},'yUney':_0xe541b1(0xe6),'ZhKfb':_0xe541b1(0x9a),'poyPZ':_0xe541b1(0xec)+_0xe541b1(0xaf),'MVOEL':_0xe541b1(0xa6),'nQTos':function(_0xb30641,_0x4354e8){return _0xb30641==_0x4354e8;},'qVpbI':_0xe541b1(0xf5)+_0xe541b1(0x90),'cnwsI':_0xe541b1(0x95),'YPODl':function(_0x118bd2,_0x5a4a70){return _0x118bd2==_0x5a4a70;},'eEKyP':_0xe541b1(0xc4)+_0xe541b1(0x8a),'mPFga':function(_0x21ea11,_0x23dee6){return _0x21ea11==_0x23dee6;},'tPTVd':_0xe541b1(0xf2),'ZCWSY':function(_0x2cd68f,_0x88e2c9){return _0x2cd68f==_0x88e2c9;},'OWFyq':_0xe541b1(0xb8)};if(_0x543747[_0xe541b1(0xe2)](_0x1ec328,_0x543747[_0xe541b1(0xbd)])){var _0x101b80=[];Object[_0xe541b1(0xc9)](storage[_0xe541b1(0xe6)])[_0xe541b1(0xd4)](_0x2d206d=>{var _0x1d89b4=_0xe541b1;_0x543747[_0x1d89b4(0x96)](_0x451f9d,_0x543747[_0x1d89b4(0xa4)])&&_0x101b80[_0x1d89b4(0x91)]({'title':storage[_0x1d89b4(0xe6)][_0x2d206d]['id'],'rowId':_0x543747[_0x1d89b4(0xf8)](_0x543747[_0x1d89b4(0xf8)](prefix,_0x543747[_0x1d89b4(0xaa)]),storage[_0x1d89b4(0xe6)][_0x2d206d]['id'])}),_0x543747[_0x1d89b4(0x96)](_0x451f9d,_0x543747[_0x1d89b4(0x99)])&&_0x101b80[_0x1d89b4(0x91)]({'title':storage[_0x1d89b4(0xe6)][_0x2d206d]['id'],'rowId':_0x543747[_0x1d89b4(0xf8)](_0x543747[_0x1d89b4(0xca)](prefix,_0x543747[_0x1d89b4(0xf0)]),storage[_0x1d89b4(0xe6)][_0x2d206d]['id'])});}),_0x543747[_0xe541b1(0xb0)](_0x451f9d,_0x543747[_0xe541b1(0xa4)])&&nayla[_0xe541b1(0xae)+'e'](from,{'text':_0xe541b1(0xeb)+storage[_0xe541b1(0xe6)][_0xe541b1(0xa7)],'footer':_0x543747[_0xe541b1(0x8b)],'title':_0x543747[_0xe541b1(0xbe)],'buttonText':_0x543747[_0xe541b1(0xbf)],'sections':[{'rows':_0x101b80}]}),_0x543747[_0xe541b1(0xf1)](_0x451f9d,_0x543747[_0xe541b1(0x99)])&&nayla[_0xe541b1(0xae)+'e'](from,{'text':_0xe541b1(0xeb)+storage[_0xe541b1(0xe6)][_0xe541b1(0xa7)],'footer':_0x543747[_0xe541b1(0x8b)],'title':_0x543747[_0xe541b1(0x98)],'buttonText':_0x543747[_0xe541b1(0xbf)],'sections':[{'rows':_0x101b80}]});}if(_0x543747[_0xe541b1(0xf1)](_0x1ec328,_0x543747[_0xe541b1(0xbb)])){var _0x101b80=[];Object[_0xe541b1(0xc9)](storage[_0xe541b1(0x95)])[_0xe541b1(0xd4)](_0x4cff31=>{var _0x1a9f71=_0xe541b1;_0x543747[_0x1a9f71(0xb0)](_0x451f9d,_0x543747[_0x1a9f71(0xa4)])&&_0x101b80[_0x1a9f71(0x91)]({'title':storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)],'rowId':_0x543747[_0x1a9f71(0xf8)](_0x543747[_0x1a9f71(0xcf)](prefix,_0x543747[_0x1a9f71(0xd5)]),storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)])}),_0x543747[_0x1a9f71(0xb0)](_0x451f9d,_0x543747[_0x1a9f71(0xb1)])&&(_0x543747[_0x1a9f71(0xe2)](storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)],_0x375367)&&_0x101b80[_0x1a9f71(0x91)]({'fitur':storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xb8)],'mess':storage[_0x1a9f71(0x95)][_0x4cff31][_0x1a9f71(0xf2)]}));});_0x543747[_0xe541b1(0x92)](_0x451f9d,_0x543747[_0xe541b1(0xa4)])&&nayla[_0xe541b1(0xae)+'e'](from,{'text':_0xe541b1(0xeb)+_0x101b80[_0xe541b1(0xa7)],'footer':_0x543747[_0xe541b1(0x8b)],'title':_0x543747[_0xe541b1(0xd1)],'buttonText':_0x543747[_0xe541b1(0xbf)],'sections':[{'rows':_0x101b80}]});if(_0x543747[_0xe541b1(0xc6)](_0x451f9d,_0x543747[_0xe541b1(0xb1)])){if(_0x543747[_0xe541b1(0x96)](_0x12e837,_0x543747[_0xe541b1(0x8e)]))return _0x101b80[0x828+-0x194d*0x1+-0x39*-0x4d][_0xe541b1(0xf2)];if(_0x543747[_0xe541b1(0xe9)](_0x12e837,_0x543747[_0xe541b1(0xc2)]))return _0x101b80[-0x44*-0x17+-0xe2*-0x1+-0x6fe][_0xe541b1(0xb8)];}}},getStorage=(_0x10667c,_0x3b1d04)=>{var _0x10f87e=_0x4b2f,_0x13ced0={'DlYvf':function(_0x56203e,_0x581b31){return _0x56203e==_0x581b31;},'aqBrI':_0x10f87e(0xe6),'etLNX':function(_0x4956c8,_0x556de1){return _0x4956c8==_0x556de1;},'saoUu':function(_0x5d9276,_0x139a21){return _0x5d9276(_0x139a21);},'geoyv':_0x10f87e(0xa0)+_0x10f87e(0xc0)+_0x10f87e(0xef)+_0x10f87e(0xc8)+_0x10f87e(0xa3)+_0x10f87e(0xdb)+_0x10f87e(0xe0)};if(_0x13ced0[_0x10f87e(0xb9)](_0x10667c,_0x13ced0[_0x10f87e(0xf6)])){var _0x5d671e=[];if(_0x13ced0[_0x10f87e(0xd2)](storage[_0x10f87e(0xe6)][_0x10f87e(0xa7)],0x2*0x1c9+0x139d+-0x172f))return _0x13ced0[_0x10f87e(0xac)](reply,_0x13ced0[_0x10f87e(0x8c)]);return Object[_0x10f87e(0xc9)](storage[_0x10f87e(0xe6)])[_0x10f87e(0xd4)](_0x45eecb=>{var _0x228e12=_0x10f87e;_0x13ced0[_0x228e12(0xb9)](storage[_0x228e12(0xe6)][_0x45eecb]['id'],_0x3b1d04)&&_0x5d671e[_0x228e12(0x91)]({'id':storage[_0x228e12(0xe6)][_0x45eecb]['id'],'msg':storage[_0x228e12(0xe6)][_0x45eecb][_0x228e12(0xe6)]});}),_0x5d671e;}};
const reactionMessage = { react: { text: `${cekUser("emote", sender)}`, key: nay.key}}
if (isCmd && !fromMe) { if (cekUser("id", sender) !== null) {
if (cekUser("ban", sender) == true) return reply("Kamu Terbanned, Kamu tidak akan bisa menggunakan bot ini")
nayla.sendMessage(from, reactionMessage)}
console.log("[" + chalk.green(" CMD ") + "]" + chalk.yellow("=") + "[ " + chalk.green(`${pushname}`) + " ]" + chalk.yellow("=") + "[ " + chalk.green(`${command}`) + " ]" + chalk.yellow("=") + "[ " + chalk.green(`${jam}`) + " ]"  )} 
const _0x561a69=_0x3cf6;function _0x3cf6(_0x1b9a43,_0x18aa2f){const _0x29583e=_0x1a51();return _0x3cf6=function(_0x20e244,_0x35218a){_0x20e244=_0x20e244-(0x862+0xd*-0x24c+0x1749*0x1);let _0x5a39e3=_0x29583e[_0x20e244];return _0x5a39e3;},_0x3cf6(_0x1b9a43,_0x18aa2f);}(function(_0x5507e8,_0x10733b){const _0xdcd838=_0x3cf6,_0x530f85=_0x5507e8();while(!![]){try{const _0x4fecfd=parseInt(_0xdcd838(0x1e8))/(-0x101d+0x1936+-0x918)*(parseInt(_0xdcd838(0x1d6))/(0x11*0x2+0x1ce1+-0x1d01))+-parseInt(_0xdcd838(0x1df))/(-0x572+-0x6*-0x3a9+0x1*-0x1081)*(-parseInt(_0xdcd838(0x1e9))/(0x1e90+0xe3*-0x6+0xc9d*-0x2))+-parseInt(_0xdcd838(0x1d3))/(-0x32*-0x49+0xecd*-0x1+0x90)+parseInt(_0xdcd838(0x1d8))/(0x4*0x76d+0x24c0+-0x60a*0xb)*(parseInt(_0xdcd838(0x1e7))/(0x206e+-0x1955+-0x712))+-parseInt(_0xdcd838(0x1da))/(-0x1fd5+0x781*-0x4+0x3de1)+parseInt(_0xdcd838(0x1d0))/(0xe47+0xa20+-0x185e)*(parseInt(_0xdcd838(0x1e4))/(0x30*0x30+-0x1fb+0x6fb*-0x1))+parseInt(_0xdcd838(0x1e5))/(-0x3c1+0x14ae*0x1+0x10e2*-0x1)*(-parseInt(_0xdcd838(0x1e3))/(0xbf*-0x4+-0x9*0xed+-0xb5d*-0x1));if(_0x4fecfd===_0x10733b)break;else _0x530f85['push'](_0x530f85['shift']());}catch(_0x3b2cc4){_0x530f85['push'](_0x530f85['shift']());}}}(_0x1a51,0x8163+0x1*0x4f3+0x14bb5));function _0x1a51(){const _0x27f683=['IWAJSHING*','1014072KgFRYL','*\x0a╚═══════','\x0a║[2]➺\x20*RI','S-TO*\x20]═══','▻►▻►▻►\x0a╔══','6edaDJn','▻►▻►▻►▻►▻►','══[\x20*THANK','[5]➺\x20*','43584DKfUvd','10VEiHKY','110HTobcs','MURUBOTZ*\x0a','42nBjkTv','27238kjQOhP','425768yYsTIk','D\x20R1YNZ*\x0a║','707481YUtdTB','\x0a║[1]➺\x20*AD','IKILLERS*\x0a','877965PpZlZI','═════════','║[3]➺\x20*LOL','2OKdNcc','║[4]➺\x20*LOR','139248ZrlwwV'];_0x1a51=function(){return _0x27f683;};return _0x1a51();}const menu=_0x561a69(0x1e0)+_0x561a69(0x1de)+_0x561a69(0x1e1)+_0x561a69(0x1dd)+_0x561a69(0x1d1)+_0x561a69(0x1d9)+_0x561a69(0x1dc)+_0x561a69(0x1e6)+_0x561a69(0x1d5)+_0x561a69(0x1d2)+_0x561a69(0x1d7)+_0x561a69(0x1cf)+_0x561a69(0x1e2)+namaowner+(_0x561a69(0x1db)+_0x561a69(0x1d4));
switch(command) { 

case 'star': case 'start': case 'menu': case 'help':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
nayla.sendMessage(from, {image:{url:"https://i.ibb.co/TKdZhk6/Screenshot-2022-09-02-01-39-12-24-9e8df3d0c7c1f50248b6ee043a653d26-1.jpg"}, caption:allmenu(prefix, namabot, sender, cekUser, m, listmenu, storage) + menu, mentions:[sender]},{quoted:nay1})
break

case 'daftar':
if (cekUser("id", sender) !== null) return reply("Kamu sudah terdaftar sebelum nya:3 Gunakan command #menu untuk mengetahui apa saja fungsi bot ini")
daftar.push({id: sender, emote:"👑", ban:false})
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))
reply(`[ *SUKSES TERDAFTAR* ] 
• *Pushname* : ${m.messages[0].pushName}
• *Sender* : ${sender.split("@")[0]} 
• *isGroup* : ${m.messages[0].isGroup}`)
break

case 'owner':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
let [x2] = ownerNumber
reply("https://wa.me/" + x2.split("@")[0])
break

case 'waifu':case 'lick':case 'kiss':case 'awoo':case 'hug':case 'cry':case 'cuddle':case 'bully':case 'megumin':case 'shinobu':case 'neko':case 'slap':case 'kick':case 'wink':case 'dance':case 'poke':case 'glomp':case 'bite':case 'nom':case 'handhold':case 'highfive':case 'wave':case 'smile':case 'yeet':case 'bonk':case 'smug':case 'pat':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply("[❗] SEDANG DIPROSES")
fetchJson(`https://api.waifu.pics/sfw/${command}`).then(x => {
nayla.sendMessage(from, {image:{url:x.url}, caption:"😄", mentions:[sender]},{quoted:nay1})})
break

case 'waifu': case 'blowjob': case 'trap': case 'neko':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply("[❗] SEDANG DIPROSES")
fetchJson(`https://api.waifu.pics/nsfw/${command}`).then(x => {
nayla.sendMessage(from, {image:{url:x.url}, caption:"😄", mentions:[sender]},{quoted:nay1})})
break
case 'slip':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
let x1 = await fetchJson("https://api.adviceslip.com/advice")
const x3 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x1.slip.advice}`)
reply(`[ *ADVICESLIP* ]
• *Id* : ${x1.slip.id}
• *Advice* : ${x3.translated}`)
break
case 'lirik':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan judul lagu:)")
hx.lirik(q).then(result => {reply(`[ *LIRIK* ]\n• *Judul* : ${q}\n• *Lirik* : ${result.lirik}`)});
break
case 'chara': case 'anime':  
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan nama karakter anime")
reply("[❗] SEDANG DIPROSES")
hx.chara(q).then(result => {
const x4 = []
Object.keys(result).forEach((i) => {  
x4.push(result[i])
})
const x5 = x4[Math.floor(Math.random() * (x4.length))]
nayla.sendMessage(from, {image:{url:x5}, caption:"🤯", mentions:[sender]},{quoted:nay1})
});
break
case 'pin': case 'pinterest': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan nama karakter anime")
reply("[❗] SEDANG DIPROSES")
hx.pinterest(q).then(result => { 
const x6 = []
Object.keys(result).forEach((i) => {  
x6.push(result[i])
})
const x7 = x6[Math.floor(Math.random() * (x6.length))]
nayla.sendMessage(from, {image:{url:x7}, caption:"🤯", mentions:[sender]},{quoted:nay1})
});
break
case 'ssweb': case 'ss': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan url, contoh? https://google.com")
reply("[❗] SEDANG DIPROSES")
nayla.sendMessage(from, {image:{url:`https://api.popcat.xyz/screenshot?url=${q}`}, caption:"😗", mentions:[sender]},{quoted:nay1})
break
case 'randomcolor': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply("[❗] SEDANG DIPROSES")
fetchJson("https://api.popcat.xyz/randomcolor").then(x => {
nayla.sendMessage(from, {image:{url:x.image}, caption:`${x.name}(${x.hex})`, mentions:[sender]},{quoted:nay1})
})
break 
case 'chatbot':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan Text chat, contoh? halo kawan")
const x8 = await fetchJson(`https://api.popcat.xyz/translate?to=en&text=${q}`)
const x9 = await fetchJson(`https://api.popcat.xyz/chatbot?msg=${x8.translated}&owner=Rimurubotz&botname=Rimurubot`)
const x10 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x9.response}`)
reply(x10.translated)
break
case 'pikiran':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x11 = await fetchJson("https://api.popcat.xyz/showerthoughts")
const x12 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x11.result}`)
reply(`[ *NDAK TAU* ]
• *Mess* : ${x12.translated}
• *Author* : ${x11.author}
• *Upvotes* : ${x11_.upvotes}`)
break
case 'quotes':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x13 = await fetchJson("https://api.popcat.xyz/quote")
const x14 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x13.quote}`)
reply(x14.translated)
break
case 'github':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan Username github")
fetchJson(`https://api.popcat.xyz/github/${q}`).then(x => {
const x15 = `[ *GITHUB PROFILE* ]
• *Name* : ${x.name}
• *Url* : ${x.url}
• *Account* : ${x.account_type}
• *Company* : ${x.company}
• *Blog* : ${x.blog}
• *Location* : ${x.location}
• *Email* : ${x.email}
• *Bio* : ${x.bio}
• *Twitter* : ${x.twitter}
• *Public_Repos* : ${x.public_repos}
• *Public_Gists* : ${x.public_gists}
• *Followers* : ${x.followers}
• *Following* : ${x.following}
• *Created* : ${x.created_at}
• *Updated* : ${x.updated_at}`
nayla.sendMessage(from, {image:{url:x.avatar}, caption:x15, mentions:[sender]},{quoted:nay1})
})
break
case 'fakta':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x16 = await fetchJson("https://api.popcat.xyz/fact")
const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x16.fact}`)
reply(x17.translated)
break
case 'crinj':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x18 = await fetchJson("https://api.popcat.xyz/joke")
const x19 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x18.joke}`)
reply(x19.translated)
break
case 'wyr': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x20 = await fetchJson("https://api.popcat.xyz/wyr")
const x21 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x20.ops1}`)
const x22 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x20.ops2}`)
reply(`[ *FUN* ]\n• *Mess* : Mana yang kamu pilih?\n\n• *1* : ${x21.translated}\n*Atau*\n• *2* : ${x22.translated}`)
break
case 'communism': case 'wanted': case 'gun': case 'clown': case 'drip': case 'uncover': case 'ad': case 'blur':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply("[❗] WAIT ( *Biasanya Proses ini akan membutuhkan waktu ±1 menit* )")
if (isImage || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {buffer = Buffer.concat([buffer, chunk])}
var rand1 = './db/media/sticker.jpg'
var rand2 = './db/media/sticker.webp'
fs.writeFileSync(`${rand1}`, buffer)
let xx = await RA.UploadFile(rand1)
var download = function(uri, filename, callback){
request.head(uri, function(err, res, body){ 
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
})}
download(`https://api.popcat.xyz/${command}?image=${xx.result.namaFile}`, "./db/media/stickerr.jpg", function(){
ffmpeg("./db/media/stickerr.jpg")
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ${rand2} -o ${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`${rand2}`) }, { quoted: nay })
fs.unlinkSync("./db/media/stickerr.jpg")
fs.unlinkSync(`${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}) 
} else { reply(`Tag/Kirim image dengan caption ${prefix + command}`)}
break
case 'setemote': case 'setemoji':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan 1 emote")
if (args[0].length !== 2) return reply("cukup masukkan 1 emote")
setUser("±emote", sender, args[0])
reply("Sukses")
break
case 'jelek': case 'cantik': case 'ganteng': case 'sad': case 'haram': case 'halal': case 'bego': case 'anjing': case 'biadab': case 'ramah': case 'satir': case 'manis': case 'pahit': case 'hitam': case 'rasis': case 'baik': case 'jahat': case 'kaya': case 'miskin': case 'pintar': case 'bodoh': case 'imut': case 'kocak': case 'kadang':   
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("Only Group")
var x23 = []
Object.keys(groupMembers).forEach((i) => {  
x23.push(groupMembers[i].id)})
const x24 = x23[Math.floor(Math.random() * (x23.length))]
nayla.sendMessage(from, {text:`Hmm🤔, Yang *Ter${command}* disini adalah @${x24.split("@")[0]}`, mentions:[x24]},{quoted:nay1})
break
case 'cekjelek': case 'cekcantik': case 'cekganteng': case 'ceksad': case 'cekharam': case 'cekhalal': case 'cekbego': case 'cekanjing': case 'cekbiadab': case 'cekramah': case 'ceksatir': case 'cekmanis': case 'cekpahit': case 'cekhitam': case 'cekrasis': case 'cekbaik': case 'cekjahat': case 'cekkaya': case 'cekmiskin': case 'cekpintar': case 'cekbodoh': case 'cekimut': case 'cekkocak': case 'cekkadang':   
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
const x25 = "https://i.ibb.co/vZ67WtJ/STK-20220828-WA0024.webp"
const x26 = "https://i.ibb.co/vq7nwnS/STK-20220828-WA0025.webp"
const x27 = [true, false][Math.floor(Math.random() * ([true, false].length))]
if (x27 == true) { nayla.sendMessage(from, {sticker:{url:x25}},{quoted: { key: {fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": `[❎] Kamu tidak ${body.slice(4).trim().split(/ +/).shift().toLowerCase()} sama sekali🥴`}} })}
if (x27 == false) { nayla.sendMessage(from, {sticker:{url:x26}},{quoted: { key: {fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": `[✅] Ya begitulah, Kamu Sangat ${body.slice(4).trim().split(/ +/).shift().toLowerCase()} Sekali 🤥`}} }) }
break
case 'apakah': case 'apa':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan text")
const x28 = ["Iya", "Tidak"][Math.floor(Math.random() * (["Iya", "Tidak"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x28}`)
break 
case 'kapankah': case 'kapan':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text")
const x29 = ["Gatau","Besok","Kemaren","Gabakal","Minggu depan","Bulan depan","Tahun depan","Lusa"][Math.floor(Math.random() * (["Gatau","Besok","Kemaren","Gabakal","Minggu depan","Bulan depan","Tahun depan","Lusa"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x29}`)
break 
case 'bisakah': case 'bisa':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text")
const x30 = ["Bisa","Tidak","Mustahil"][Math.floor(Math.random() * (["Bisa","Tidak","Mustahil"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x30}`)
break 
case 'siapakah': case 'siapa':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text")
const x31 = ["Kamu","Dia","Gatau"][Math.floor(Math.random() * (["Kamu","Dia","Gatau"].length))]
reply(`[ *KERANG-AJAIB* ]
• *Cmd* : ${command}
• *Pertanyaan* : ${q}
• *Jawaban* : ${x31}`)
break 
case 'sticker': case 'stiker': case 's':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (isImage || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'db/media/'+getRandom('.jpg')
var rand2 = 'db/media/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else if (isVideo || isQuotedVideo) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'db/media/'+getRandom('.mp4')
var rand2 = 'db/media/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else {
reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 5 detik!`)
}
break 
case 'report':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!args[0]) return reply("Masukkan Text chat anda, text/pesan yang anda berikan akan terkirim ke owner bot")
const [x32] = ownerNumber
nayla.sendMessage(x32.split("@")[0] + "@s.whatsapp.net", {text:`[ *PESAN* ]\n• *Dari* @${sender.split("@")[0]}\n• *Pesan* : ${q}\n• *Jam* : ${jam}`, mentions:[sender]},{quoted:nay1})
reply("Sukses, text/pesan yang anda berikan akan terkirim ke owner bot")
break
 case 'editinfo':
case 'editinfogroup':
case 'editinfogrup':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (args[0] === 'all') {
await nayla.groupSettingUpdate(from, 'unlocked')
} else if (args[0] === 'admin') {
await nayla.groupSettingUpdate(from, 'locked')
} else {
reply("Masukkan query all/admin")
}
break
case 'group':
case 'grup':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (args[0] === 'close') {
await nayla.groupSettingUpdate(from, 'announcement')
} else if (args[0] === 'open') {
await nayla.groupSettingUpdate(from, 'not_announcement')
} else {
reply("Masukkan query open/close")
}
break
case 'promote':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dipromosikan menjadi admin group');
const men = nay.message.extendedTextMessage.contextInfo.mentionedJid;
nayla.groupParticipantsUpdate(from, men,"promote");
break
case 'demote':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin di demote di group ini');
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid;
await nayla.groupParticipantsUpdate(from, mention,"demote");
break
case 'add':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukan number yang ingin ditambahkan di group\nex: !add 62881xxxxxxx")
topnumberor = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
await nayla.groupParticipantsUpdate(from, [topnumberor],"add")
break
case 'kick':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dikeluarkan dari group ini')
const mentioyn = nay.message.extendedTextMessage.contextInfo.mentionedJid
await nayla.groupParticipantsUpdate(from, mentioyn,"remove")
break
case 'resetlink':
case 'revoke':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
await nayla.groupRevokeInvite(from)
break
case 'linkgroup':case 'linkgc':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
const code = await nayla.groupInviteCode(from)
reply("https://chat.whatsapp.com/" + code)
break
case 'setdesc':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukkan text")
nayla.groupUpdateDescription(from, q)
break
case 'setname':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukkan text")
nayla.groupUpdateSubject(from, q);
break

case 'addmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply("Masukkan text msg")
storage.msg.push({id: storage.msg.length + 1, msg:q})
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("Sukses menambah Msg anda di database, Ingin melihat msg anda? Gunakan command #getmsg")
break

case 'getmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (storage.msg.length == 0) return reply("Tidak ada apa apa disini, Ayo Tambah kan msg kamu di command #addmsg")
if (!q) return cekStorage("msg","cek")
reply(`[ *MESSAGES* ]\n• *Id* : ${getStorage("msg", args[0])[0].id}\n• *Msg* : ${getStorage("msg", args[0])[0].msg}`)
break 
case 'deletemsg': case 'dellmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (storage.msg.length == 0) return reply("Tidak ada apa apa disini, Ayo Tambah kan msg kamu di command #addmsg")
if (!q) return cekStorage("msg","delete")
if (getStorage("msg", q)[0].id == args[0]){
Object.keys(storage.msg).forEach((i) => {
storage.msg[i].msg = `Maaf Msg id ${storage.msg[i].id} Telah dihapus oleh owner`
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
})}
reply("Sukses menghapus id " + args[0])
break
case 'risetmsg': case 'resetmsg':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return nayla.sendMessage(from, {text: "Apakah anda Yakin? ini akan menghapus semua/all msg yang sudah terdaftar sebelumnya.", footer: 'Jika tidak yakin Abaikan saja pesan ini',buttons: [{buttonId: prefix + command + " y", buttonText: {displayText: 'YAKIN'}, type: 1}], headerType: 1})
storage.msg = []
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("SUKSES MENGHAPUS KESELURUHAN MSG") 
break
case 'ban':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return cekBan("ban")
setUser("±ban", args[0], true)
reply("Sukses ban user ini")
break
case 'unban':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return cekBan("unban")
setUser("±ban", args[0], false)
reply("Sukses unban user ini")
break

case 'chat': case 'menfess': case 'menfes': 
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q1) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q2) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q3) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
nayla.sendMessage(`${q1}@s.whatsapp.net`, {image:{url:"https://cdn-icons-png.flaticon.com/512/4712/4712029.png"}, caption:`Halo Ada pesan nih:3\n> *Dari* : ${q2}\n> *Jam* : ${jam}\n> *Pesan* : ${q3}`})
reply("Sukses mengirim pesan pribadi")
break

case 'addcmd': case 'addlist': case 'addcommand':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!q1) return reply(`Masukkan cmd&balasannya\n*Contoh* : ${prefix + command} test&Halo`)
if (!q2) return reply(`Masukkan cmd&balasannya\n*Contoh* : ${prefix + command} test&Halo`)
storage.cmd.push({fitur: q1, mess:q2})
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("Sukses menambah Cmd anda di database, Ingin melihat cmd anda? Gunakan command #getcmd")
break
case 'getcmd': case 'getlist': case 'getcommand': case 'list': case 'listcmd': case 'listcommand':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (storage.cmd == "") return reply("Tidak ada apa apa disini, Silahkan add cmd anda di command #addcmd")
cekStorage("cmd","cek")
break
case 'risetcmd': case 'resetcmd': case 'risetlist': case 'resetlist': case 'risetcommand': case 'resetcommand':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isOwner) return reply("Only Owner")
if (!q) return nayla.sendMessage(from, {text: "Apakah anda Yakin? ini akan menghapus semua/all list-cmd yang sudah terdaftar sebelumnya.", footer: 'Jika tidak yakin Abaikan saja pesan ini',buttons: [{buttonId: prefix + command + " y", buttonText: {displayText: 'YAKIN'}, type: 1}], headerType: 1})
storage.cmd = [] 
fs.writeFileSync('./db/function/storage.json', JSON.stringify(storage))
reply("SUKSES MENGHAPUS KESELURUHAN CMD") 
break
case 'gettcmd':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
reply(cekStorage("cmd","get",args[0],"mess"))
break 

case 'antilink':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply(`[ *ANTILINK* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
//if (isAntilink) return reply("Antilink sudah aktif sebelum nya")
if (q == "on"){
antilink.push(from)
fs.writeFileSync('./db/function/antilink.json', JSON.stringify(antilink))
reply("SUKSES ON")}
if (q == "off"){
antilink.splice(from, 1)
fs.writeFileSync('./db/function/antilink.json', JSON.stringify(antilink))
reply("SUKSES OFF")}
break

case 'welcome':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply(`[ *WELCOME* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
//if (isWelcome) return reply("Welcome sudah aktif sebelum nya")
if (q == "on"){
welcome.push(from)
fs.writeFileSync('./db/function/welcome.json', JSON.stringify(welcome))
reply("SUKSES ON")}
if (q == "off"){
welcome.splice(from, 1)
fs.writeFileSync('./db/function/welcome.json', JSON.stringify(welcome))
reply("SUKSES OFF")}
break

default: 
if (!isCmd) {
if (!isAntilink) return
if (!isGroup) return
if (budy.includes("http")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("https")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes(".com")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("herokuapp")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes(".xyz")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("t.me")) { if (isGroupAdmins) return reply("Admin Bebas melanggar 👍")
if (!isBotGroupAdmins) return reply("Antilink On, Bot bukan admin, perintah di batalkan")
reply("[ *ANTILINK* ]")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
}
if (budy == prefix + "sc"){reply("https://semawur.com/6df19ZzNz")} // JANGAN DI UBAH:(
}} catch (err) {
console.log(color('[ERROR]', 'red'), err)
}}
