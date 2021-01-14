exports.run = async (client, message, args) => {
const { MessageEmbed } = require('discord.js')
const server = message.guild
const e = new MessageEmbed()
.setColor('RANDOM')
.setTitle(`Info on guild ${server.name}.`)
.addField('Server ID',`${server.id}`,true)
.addField('Members',`${server.memberCount}`,true)
.addField('Roles',`${server.roles.cache.size}`,true)
.addField('Owner',`<@${server.owner.id}>`,true)
message.channel.send(e)
}

