 import { v4 } from 'uuid';
import { express } from 'express';
 const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;
//import DB from './database.js';
import cookieParser from 'cookie-parser';
import { compareSync } from 'bcryptjs';

import '../src/Book/chatMessage.js';

let users = {};

app.use(json());

app.use(express.static('public'));

app.use(cookieParser());

app.set('trust proxy', true);

const apiRouter = Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const hashedPassword = bcrypt.jshashSync(req.body.password, 10);
    const user = { email: req.body.email, password: hashedPassword, token: v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (compareSync(req.body.password, user.password)) {
      user.token = v4();
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
    const messages = await find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
