const { Composer } = require('micro-bot')
const schedule = require('node-schedule');
const moment = require('moment/moment');
moment().format(); 
//const bot = new Telegraf("5646350080:AAGfLNylrcQgEpdb8KnP18AB3ylElqNVpjA");
const bot = new Composer();

let date = new Date("Fri 14 Oct 2022 17:00:00");
 date = moment(date).format();
 console.log(date);

bot.start((ctx) => ctx.reply('Welcome'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears("start", message => {
    message.reply('Bot started!');
    console.log(message);
    const job = schedule.scheduleJob(date, function(){
        message.reply('Exam tomorrow!');
      });
});




module.exports = bot;