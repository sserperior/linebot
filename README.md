# Linebot for Empires and Puzzles
This is a simple chatbot for the [LINE](https://line.me) app. For more information on how to implement LINE chatbots, see [here](https://developers.line.biz/en/docs/messaging-api/building-bot/).

The chatbot is implemented in [NodeJS](https://www.nodejs.org). It is designed to act as an assistant for simple queries relating to the Empires and Puzzles mobile game. You can host it on any Cloud provider. You will need to override the following environment variables:
* CHANNEL_ACCESS_TOKEN - from LINE app
* CHANNEL_SECRET - from LINE APP
* TMTR_HARPOON_GOOGLE_SPREADSHEET_KEY - Google spreadsheet key with data containing two columns "Team A" and "Team B"
* TMTR_HARPOON_GOOGLE_SPREADSHEET_URL - Google spreadsheet URL with data containing two columns "Team A" and "Team B"
* GOOGLE_TRANSLATE_API_KEY - Google Cloud Translation API key
* GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL - Google service account client email
* GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY - Google service account private key
* MONGODB_CONNECTION_URI - URI for a MongoDB connection

To deploy this, execute:

1. npm run test
- This will generate the file hero-brain.nlp that is trained with the required data.

2. Push the application to your Cloud provider (e.g. cf push)

Example Intents:

1. Show a hero card

"Show *hero*"

2. Show the harpoon team for an alliance member

"What harpoon team is *alliance member* on?"

3. Show hero special

"What is the special for *hero*?"

4. Translate *some text*

"Translate pourquoi?"

5. Help
