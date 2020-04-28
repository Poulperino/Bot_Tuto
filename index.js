const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js')

bot.on("ready", async() =>{
    console.log('Le Bot est lancé.');
    bot.user.setActivity('Not tutoriel. Bonjour!');
});

bot.on('message', async (msg) => {
    if(msg.content == 'bonjour') {
        msg.channel.send('Yoyoyo')
    }
});

bot.on('message', async (msg) => {
    if(msg.content == 'Vétusté') {
        msg.channel.send('Daki Fucsy 59 = Lfvp Jgdnb 95')
    }
});

bot.on('message', async (msg) => {
    if(msg.content == 'fusions galactiques') {
        msg.channel.send('https://sites.google.com/view/xueirtsym-neib-etis-nu/accueil')
    }
});

bot.on('message', async (msg) => {
    if(msg.content == 'poireau') {
        msg.channel.send('https://sites.google.com/view/fondues-au-poireaux/accueil')
    }
});

bot.on('message', async (msg) => {
    if(msg.content.startsWith(config.prefix) && !msg.author.bot){
        cmdArray = msg.content.substring(1).split()
        cmd = cmdArray[0]
        args = cmdArray.slice(1)

        msg.channel.send(cmd)
        
        if(cmd == 'ping'){
            msg.channel.send("pong :joy:")
        }
    }
});

bot.login(config.token);