let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Sf [08877782600]
│ • Gopay [08877782600]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/08877782600
╰────
`.trim()) // Makasih Donasi nya
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
