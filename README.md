The Chatbot works with Firebase database (firestore).

STEP 1: Go to Google Firebase and sign in with your google account.

STEP 2: Create a new web app in the firebase.

STEP 3: When the app is created successfully, go to its settings and inside the General Settings scroll down to find the "Firebase SDK Snippet".

STEP 4: Find the radio button there i.e. labeled "Config". Click on that button and find your API keys object there.

STEP 5: Now copy the whole API keys object and then in this repo go to src > components > ChatBot > config > firebase > index.js  and replace the comment there with your API keys.

STEP 6: Now in the root directory, run the command: npm i (to install all the project packages and dependencies).

STEP 7: Now the chatbot chat console is ready. Now you just need the Dashboard to control the bot (which is in the "admin-panel-ym" repo).

#NOTE: The API keys must be same for the Chatbot and the Dashboard. You need to create the new app in Firebase only ONCE. Then use the same API keys in both.
