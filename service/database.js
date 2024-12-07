const { MongoClient } = require('mongodb');
const bcryptjs = require('bcryptjs');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.MongoUserName}:${config.MongoPassword}@${config.MongoHostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('welcome');
const chatCollection = db.collection('chat');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

function getChat() {
  return chatCollection.find();
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcryptjs.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser
};
