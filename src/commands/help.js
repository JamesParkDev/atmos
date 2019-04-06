const cache = require('../utils/cache.js')
const bot = require('../bot.js')
exports.run = (client, message, args, embed, thumbImg, reactions, embedColors) => {
  var prefix = cache.getPrefixCache(message.guild.id)
  embed.setTitle('Commands List')
  embed.setDescription('For more info, check https://atmosbot.com')
  embed.setColor(embedColors.default)
  embed.setThumbnail(thumbImg)
  embed.setFooter(`${message.author.username + '#' + message.author.discriminator} | ❤ JunoDevs`)
  embed.setTimestamp(new Date())
  embed.addField(`All commands can use custom prefix (**${prefix}**) or the default prefix (**${bot.config.prefix}**)`, 'Not all existing commands shown')
  embed.addBlankField()
  embed.addField(`${prefix}help`, 'This page', true)
  embed.addField(`${prefix}setprefix`, 'Sets custom prefix', true)
  embed.addField(`${prefix}getprefix`, 'View your custom prefix', true)
  message.channel.send(embed)

  message.react(reactions.success)
}
