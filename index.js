const discord = require("discord.js");
const token = require("./token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});
const lib = require("./lib/functions");

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

lib.setup(bot);

module.exports.bot = bot;

bot.login('NTU5MzgxNTI1MTI5NTkyODM5.XZ74CA.RwOFk6ldbs7g4JT88sIPCippedw');
