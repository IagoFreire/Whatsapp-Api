const express = require("express");
const cors = require("cors");
const http = require("http");
const qrcode = require("qrcode-terminal");
const axios = require("axios");

const client = require("./config/client");
const routes = require("./routes");

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message_ack", (message, ack) => {
  const payload = {
    messageId: message.id.id,
    messageStatus: message.ack,
  };

  axios
    .post(process.env.CALLBACK_URL, payload)
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res.data);
    })
    .catch((error) => {
      console.error(`Send message ack error: ${error.message}`);
    });
});

client.initialize();

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
