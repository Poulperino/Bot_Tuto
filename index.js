const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on("ready", async() =>{
    console.log('Le Bot est lancé.');
    bot.user.setActivity('Not tutoriel. Bonjour!');
});

bot.login(process.env.BOT_TOKEN);