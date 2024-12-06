const mongoose = require('mongoose');

// Define the schema
const chatMessageSchema = new mongoose.Schema({
  message: String,
  username: String
});

// Create the model
const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;