# Warbler
Simplistic twitter style clone built on the MERN stack. Users can post messages, like and comment on messages, and follow other users.

See the demo here [https://rt-warbler-client.herokuapp.com](https://rt-warbler-client.herokuapp.com), give the app some time to wake up since it's on the free tier

### How to Launch App
Download or clone the repo. From the client and server directories...
- run `npm install` to install dependencies
- spin up a local MongoDB server or update the url inside `warbler-server/models/index.js` to connect to a managed MongoDB
- in the server directory run `node index.js` to start the backend
- in the client directory run `npm start` to start the frontend at `localhost:3000`
