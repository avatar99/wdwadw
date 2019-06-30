const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";

client.on('ready', () => {
	console.log('Dream iS Here');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`b 1.0`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});



    const dreamv2 = ["557181389100023839"]
    client.on('message', message => {
        var dream = message.content.split(` `).slice(1).join(' ');
          if (!dreamv2.includes(message.author.id)) return;
          if(message.content.startsWith(prefix + "setg")){
            client.user.setActivity(dream);
            message.channel.send(`✔️ **Done Playing Now __${dream}__**`)
        }
          if (message.content.startsWith(prefix + 'setw')) {
      client.user.setActivity(dream, {type:'WATCHING'});
          message.channel.send(`✔️  **Done Watching Now __${dream}__ **`)
      } else
      if (message.content.startsWith(prefix + 'setl')) {
      client.user.setActivity(dream , {type:'LISTENING'});
          message.channel.send(`✔️ **Done Listening Now __${dream}__** `)
      } else
      if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(dream, "https://www.twitch.tv/dream");
         message.channel.send(`✔️ **Done Stream Now  __${dream}__ **`)
      }
   if (message.content.startsWith(prefix + 'setn')) {
  client.user.setUsername(dream).then
      message.channel.send(`Changing The Name To ..**${dream}** `)
} else
if (message.content.startsWith(prefix + 'seta')) {
  client.user.setAvatar(dream);
    message.channel.send(`Changing The Avatar To :**${dream}** `);
}
});



client.login(process.env.TOKEN);
