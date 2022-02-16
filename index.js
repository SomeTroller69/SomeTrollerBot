const axios = require('axios'); //add this line at the >
require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord>

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', async msg => {
async function getMeme(){
  const res = await axios.get('https://memeapi.pythonan>
  return res.data.memes[0].url;
}
  switch (msg.content) {
    case "ping":
      msg.reply("Pong!");
      break;




    //our meme command below
case "!meme":
      msg.channel.send("Here's your meme!"); //Replies >
      const img = await getMeme(); //fetches an URL fro>
      msg.channel.send(img); //send the image URL
      break;
   }
})




//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token
