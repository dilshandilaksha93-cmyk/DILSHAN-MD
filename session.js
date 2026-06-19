//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                     XPROVERCE MD NEW                                               //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//                                                                                                      //
//
//                      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//                      █▄▀█▀▄██░▄▄░██░▄▄▀██░▄▄▄░████░███░██░▄▄▄██░▄▄▀██░▄▄▀██░▄▄▄
//                      ███░████░▀▀░██░▀▀▄██░███░█████░█░███░▄▄▄██░▀▀▄██░█████░▄▄▄
//                      █▀▄█▄▀██░█████░██░██░▀▀▀░█████▄▀▄███░▀▀▀██░██░██░▀▀▄██░▀▀▀
//                      ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © DILSHAN MD
//  * @version      : 1.0
//  * @author       : dilaksha dilshan
//  * @youtube      : https://www.youtube.com/@gamingrash2004
//  * @description  : A Multi-functional WhatsApp bot created by dilaksha dilshan.
//*
//*
//Base by dilaksha dilshan
//GitHub: @mrdila
//WhatsApp: +94766539100
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2004
//   * Created By GitHub: Mrdila
//   * Credit To dilaksha dilshan
// ⛥┌┤
// */
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "your session",
PORT: process.env.PORT || "8000"
};
