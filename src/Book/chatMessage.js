import { Schema, model } from 'mongoose';

// Define the schema
const chatMessageSchema = new Schema({
  message: String,
  username: String
});

// Create the model
const ChatMessage = model('ChatMessage', chatMessageSchema);

export default ChatMessage;