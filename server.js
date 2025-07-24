// const TelegramBot = require("node-telegram-bot-api");
// const axios = require("axios");
// const dotenv = require("dotenv");
// dotenv.config();

// const token = process.env.API_KEY;
// const bot = new TelegramBot(token, { polling: true });
        
// bot.onText("/start", (req) => {              
//   const message = req;
//   const chatId = req.chat.id;                           
//   // console.log('msg ',req);
//   bot.sendMessage(chatId, `Hello, ${req.from.first_name}`);
//   bot.sendMessage(chatId, `received your message as, ${message.text}`);                
// });
     
// const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// bot.onText("/weather (.+)", async (req) => {
//   try {
//     const city = req.text.replace('/weather ',"");
//     const chatId = req.chat.id;
//     // console.log(req);
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
//     const response = await axios.get(url);
//     const weather = response.data;

//     const reply = `
//         🌤 Weather in *${weather.name}*:
//         - Temp : ${weather.main.temp}°C
//         - Feels like : ${weather.main.feels_like}°C
//         - Condition : ${weather.weather[0].description}
//     `;
//     bot.sendMessage(chatId, reply, {parse_mode : 'Markdown'});
//   } catch (error) {
//     console.log("error is occured. ", error.message);
//     bot.sendMessage(req.chat.id, "No any city found.");
//   }
// });
       
const { Telegraf, Markup } = require("telegraf");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const token = process.env.API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const bot = new Telegraf(token);
const { countries, statesByCountry, citiesByState } = require("./data");

// bot.onText("/weather (.+)", async (req) => {
//   try {
//     const city = req.text.replace("/weather ", "");
//     const chatId = req.chat.id;
//     // console.log(req);
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
//     const response = await axios.get(url);
//     const weather = response.data;

//     const reply = `
//         🌤 Weather in *${weather.name}*:
//         - Temp : ${weather.main.temp}°C
//         - Feels like : ${weather.main.feels_like}°C
//         - Condition : ${weather.weather[0].description}
//     `;
//     bot.sendMessage(chatId, reply, { parse_mode: "Markdown" });
//   } catch (error) {
//     console.log("error is occured. ", error.message);
//     bot.sendMessage(req.chat.id, "No any city found.");
//   }
// });

// Step 1: User types /weather
bot.command("weather", (ctx) => {
  ctx.reply(
    "🌍 Choose a country:",
    Markup.inlineKeyboard(
      countries.map((c) => [Markup.button.callback(c, `country:${c}`)])
    )
  );                
});

// Step 2: User selects a country
bot.action(/country:(.+)/, async (ctx) => {
  const country = ctx.match[1];
  ctx.answerCbQuery(); // to remove loading spinner
  const states = statesByCountry[country] || [];
  if (!states.length) return ctx.reply("❌ No states found for this country.");

  ctx.reply(
    `📍 Select a state in ${country}:`,
    Markup.inlineKeyboard(
      states.map((s) => [Markup.button.callback(s, `state:${s}`)])
    )
  );
});

// Step 3: User selects a state
bot.action(/state:(.+)/, async (ctx) => {
  const state = ctx.match[1];                
  ctx.answerCbQuery();
  const cities = citiesByState[state] || [];
  if (!cities.length) return ctx.reply("❌ No cities found in this state.");

  ctx.reply(
    `🏙 Select a city in ${state}:`,
    Markup.inlineKeyboard(
      cities.map((city) => [Markup.button.callback(city, `city:${city}`)])
    )
  );
});

// Step 4: User selects a city
bot.action(/city:(.+)/, async (ctx) => {
  const city = ctx.match[1];
  ctx.answerCbQuery();
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);
    const weather = response.data;
    ctx.reply(
      `🌤 Weather in ${weather.name}:\n🌡 Temp: ${weather.main.temp}°C\n💧 Humidity: ${weather.main.humidity}%\n🌬 Wind: ${weather.wind.speed} m/s`
    );
  } catch (err) {
    console.log(err.message);
    ctx.reply("⚠️ Failed to get weather. City might not be supported.");
  }
});

bot.launch();
