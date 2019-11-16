# Linebot for Empires and Puzzles
This is a simple chatbot for the [LINE](https://line.me) app. For more information on how to implement LINE chatbots, see [here](https://developers.line.biz/en/docs/messaging-api/building-bot/).

The chatbot is implemented in [NodeJS](https://www.nodejs.org). It is designed to act as an assistant for simple queries relating to the Empires and Puzzles mobile game. You can host it on any Cloud provider. You will need to override the CHANNEL_ACCESS_TOKEN and CHANNEL_SECRET environment variables with those from your LINE channel. Also, the TMTR_HARPOON_GOOGLE_SPREADSHEET_KEY environment variable is for reading a specific Google doc spreadsheet with two columns of strings and headers "Team A" and "Team B".

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
