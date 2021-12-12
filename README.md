<img src="./images/SuperChat.png">

# SuperChat!

It's a simple project of a chat for testing my new knowledge. I'm creating a web app using the MERN Stack (MongoDB, Express, React, NodeJS) and is also used the WebSocket technology to send messages in real-time.

## Preview

<img src="./images/1.png">
<img src="./images/2.png">
<img src="./images/3.png">

### Deployed

The web application is deployed on Heroku and here is the [link](https://nodejs-server-superchat.herokuapp.com/).

## Run it locally

### Server

- Create a mongo database (I used MongoDB Atlas), create a user/password and take those credentials because later you will use this information to connect the server with the DB.

- Create `.env` file in the root path `/` and add these variables:

```env
// Local Server config
HOST=localhost:[YOUR_PORT]

// Database config
USERNAME=[YOUR_DB_USERNAME]
PASSWORD=[YOUR_DB_PASSWORD]
DB_HOST=[YOUR_DB_HOSTNAME]
DB_NAME=[YOUR_DB_NAME_COLLECTION]
```

- Install node packages and then run.

```bash
npm install
npm run dev
```

### Client

- move to the client folder `./client`, install the dependencies and then run the client.

```
npm install
npm start
```

## Reference

Based and inspired on a [nodejs]() platzi course 💚.

## License

[MIT](https://choosealicense.com/licenses/mit/)
