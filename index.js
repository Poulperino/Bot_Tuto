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
    if(msg.content == 'Eyes glowing red in the dark on the ocean floor As the serpent awakes') {
        msg.channel.send('https://sites.google.com/view/fusionsgalactiquesmgabadaboomd/accueil')
    }
});

bot.on('message', async (msg) => {
    if(msg.content == 'eyes glowing red in the dark on the ocean floor as the serpent awakes') {
        msg.channel.send('https://sites.google.com/view/fusionsgalactiquesmgabadaboomd/accueil')
    }
});

bot.on('message', async (msg) => {
    if(msg.content == 'Powersnake') {
        msg.channel.send('Rho quand même la chanson est plus épique que ça...')
    }
});

bot.on('message', async (msg) => {
    if(msg.content == '671') {
        msg.channel.send('719 ! Bravo à toi ! Bon je pense que la chatte t es venue en aide à de nombreuses reprises parce qu un cerveau aussi inférieur que le tiens n aurait pu découvrir pareille machinerie tous seul. Je sais je peux pas faire les apostrophe parce que en code c est de la merde et que je sais pas comment faire ! Bon si jamais t as résolu ça avant la fin de ton armée bah courage pour la suite et sinon go se capter pour faire un jdr bientôt. Accessoirement te filer ton jeu bien mérité !')
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