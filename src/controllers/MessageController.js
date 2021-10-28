const client = require("../config/client");

module.exports = {
  async store(req, res) {
    const { phoneNumber, message } = req.body;

    // Getting chatId from the number.
    // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = phoneNumber.substring(1) + "@c.us";

    // Sending message.
    const messageResponse = await client.sendMessage(chatId, message);

    const response = {
      messageId: messageResponse.id.id,
      messageStatus: messageResponse.ack,
    };

    return res.json(response);
  },
};
