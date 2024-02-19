/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QUEENNILU;;;cv8mDKaR#Fo3srMxrmuW753YLhrzP3nCkFtu_j-pjEPJdXbZ9nHo' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://cnc_bot_user:qNlo88iPXqUOJx73wn7zVdZ00k8o4sYj@dpg-cn9jaoed3nmc73dij5k0-a.oregon-postgres.render.com/cnc_bot'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94728282261'

global.OWNER_NAME = '𝙳𝙰𝚁𝙺 𝚂𝚃𝙰𝚁'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝓒𝓝𝓒 𝓑𝓞𝓣
'

global.FOOTER = ' 𝐶𝑁𝐶 𝐵𝑂𝑇 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@CNC 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '𝐶𝑁𝐶 𝐵𝑂𝑇  © 2024' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/7bec65ba5668088232246.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'true' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/L5bnQX4BOPU2VA2HmXGEFa' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: ANY GAME REVIEW" //ur yt chanel name
global.socialm = "GitHub: mybothere" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
