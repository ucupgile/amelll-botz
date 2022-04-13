let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6285715590172
│┝‷✧ *Dana:* chat owner
│┝‷✧ *Linkaja:* chat owner
│┝‷✧ *Gopay:* chat owner
│┝‷✧ *Ovo:* chat owner
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285715590172?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
