let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [0895637941123]
│ • Gopay [081233211675]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895637941123
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
