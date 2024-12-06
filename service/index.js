const express = require('express');
const uuid = require('uuid');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs');

const chatMessage = require('../src/Book/chatMessage.js');

let users = {};

app.use(express.json());

const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(cookieParser());

app.set('trust proxy', true);

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const hashedPassword = bcrypt.jshashSync(req.body.password, 10);
    const user = { email: req.body.email, password: hashedPassword, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (bcryptjs.compareSync(req.body.password, user.password)) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

//Add a chat message
apiRouter.post('/addMessage', async (req, res) => {
  try {
    const { message, username } = req.body;

    const newMessage = new ChatMessage({ message, username });
    await newMessage.save();

    res.status(201).send('Message added');
  } catch (error) {
    res.status(500).send('Error adding message');
  }
});

//Gets the chat messages
apiRouter.get('/messages', async (req, res) => {
  try {
    const messages = await chatMessage.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Return the application's default page if the path is unknown
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
