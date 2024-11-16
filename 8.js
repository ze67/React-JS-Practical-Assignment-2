$(document).ready(function() {
    let messageHistory = [];

    $('#send-btn').on('click', function() {
        let message = $('#chat-input').val().trim();

        if (message !== '') {
            sendMessage(message); 
            $('#chat-input').val(''); 
        }
    });

    $('#chat-input').on('keypress', function(e) {
        if (e.which === 13) { 
            $('#send-btn').click(); 
        }
    });

    function sendMessage(message) {
        messageHistory.push({ text: message, sender: 'user' });
        displayMessage(message, 'sent');
        setTimeout(function() {
            let replyMessage = generateReply(message);
            messageHistory.push({ text: replyMessage, sender: 'bot' });
            displayMessage(replyMessage, 'received');
        }, 1000);
    }

    function displayMessage(message, type) {
        let messageElement = `<div class="message ${type}">${message}</div>`;
        $('#messages').append(messageElement);
        $('.chat-window').scrollTop($('.chat-window')[0].scrollHeight); 
    }

    function generateReply(userMessage) {
        let replies = [
            "I'm here to help!",
            "That's interesting!",
            "Tell me more.",
            "Got it! Anything else?",
            "How can I assist you further?"
        ];
        return replies[Math.floor(Math.random() * replies.length)];
    }
});