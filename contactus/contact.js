// Chatbot functionality
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const sendChatbotMessage = document.getElementById('send-chatbot-message');

sendChatbotMessage.addEventListener('click', () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        const userMsgElem = document.createElement('div');
        userMsgElem.textContent = `You: ${userMessage}`;
        chatbotMessages.appendChild(userMsgElem);
        
        // Simple chatbot response logic
        const chatbotMsgElem = document.createElement('div');
        let botResponse = '';

        if (userMessage.toLowerCase().includes('hello')) {
            botResponse = 'Hello! How can I help you today?';
        } else if (userMessage.toLowerCase().includes('support')) {
            botResponse = 'You can contact our support at support@farmsyncro.com';
        } else {
            botResponse = "I'm here to assist! Ask me anything about FarmSyncro.";
        }

        chatbotMsgElem.textContent = `Bot: ${botResponse}`;
        chatbotMessages.appendChild(chatbotMsgElem);

        chatbotInput.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});
