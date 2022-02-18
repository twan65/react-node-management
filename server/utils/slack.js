const config = require("../config/slack");
const { WebClient } = require("@slack/web-api");
const web = new WebClient(config.token);

module.exports = {
  sendToUser: async (userName, email) => {
    const channel = await getChannelIdByChannelName(
      config.channelNames.holiday
    );
    const user = await getUserIdByEmail(email);
    // XXXXXさん、YYYY年MM月DD日の休みが許可されました。
    const text = userName + "さん、休みが許可されました。";

    console.log(
      `Slack Send To message. channel id:${channel}, user id:${user}`
    );
    try {
      web.chat.postEphemeral({
        channel,
        user,
        text,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

async function getChannelIdByChannelName(channelName) {
  try {
    const result = await web.conversations.list();

    const channelInfo = result.channels.find((c) => channelName === c.name);
    if (channelInfo) {
      console.log(
        "Channel名：" + channelName + ", Channel ID：" + channelInfo.id
      );
      return channelInfo.id;
    }
    console.error(channelName + "チャンネルは存在しません。");
  } catch (error) {
    console.error(error);
  }
}
async function getUserIdByEmail(email) {
  try {
    const result = await web.users.list();
    const user = result.members.find((u) => email === u.profile.email);
    if (user) {
      return user.id;
    }

    console.error(email + "ユーザーは存在しません。");
  } catch (error) {
    console.error(error);
  }
}
