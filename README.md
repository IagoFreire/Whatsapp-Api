# WhatsApp API

> API REST para envio de mensagens WhatsApp com rastreamento de status de entrega

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)

## Funcionalidades

- Envio de mensagens via WhatsApp Web sem precisar da API oficial
- Callbacks de status de entrega enviados para URL configurável
- Autenticação via QR Code no primeiro acesso
- Suporte a ambientes de desenvolvimento e produção via variável de ambiente

## Tecnologias

**Backend:** Node.js, Express, whatsapp-web.js, Axios

## Como rodar

```bash
yarn install
npm run start:dev
```

> Escaneie o QR Code exibido no terminal com o WhatsApp do celular para autenticar.  
> Configure `CALLBACK_URL` para receber os callbacks de status das mensagens.