const { v4: uuidv4 } = require('uuid');

const messages = {}

const generateId = () => {
    return uuidv4().replace(/-/g, '').substring(0, 22);
};

function initializeTestData() {
    const testMessages = [
        {
            id: generateId(),
          text: "Hi there!",
          user: "Amando",
          added: new Date()
        },
        {
            id: generateId(),
          text: "Hello World!",
          user: "Charles",
          added: new Date()
        }
      ];

      testMessages.forEach(msg => addMessage(msg.text, msg.user));
}

function getAllMessages() {
    return Object.values(messages)
}

function addMessage(message, user) {
    const newMessage = { id: generateId(), text: message, user: user, added: new Date() }
    messages[newMessage.id] = newMessage
}

initializeTestData();
module.exports = {
    getAllMessages,
    addMessage,
};