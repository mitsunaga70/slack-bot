var Botkit = require("./lib/Botkit.js"); //パス注意
var os = require("os");

var controller = Botkit.slackbot({
  debug: true,
});

var bot = controller.spawn({
  token: "xoxb-6171738617028-6192669787824-UAzEc20dejaB8njGC6gHPX6O"
}).startRTM();

controller.on("direct_message", (bot, message) => {
  var now = new Date(); //時刻の取得
  var user_name = "名無しさん: " + now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + "/ " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  bot.reply(message, "匿名で投稿しました．");

  bot.startConversation({ channel: "C065BTEAH7B" }, (err, convo) => {
    var send_message = {
      type: "message",
      channel: "C065BTEAH7B",
      text: message.text,
      username: user_name,
      thread_ts: null,
      reply_broadcast: null,
      parse: null,
      link_names: null,
      attachments: null,
      unfurl_links: null,
      unfurl_media: null,
      icon_url: null,
      icon_emoji: ":robot_face:",
      as_user: true
    }
    convo.say(send_message);
  });
});
