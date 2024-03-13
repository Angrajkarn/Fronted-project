document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const userProfile = document.getElementById('user-profile');
    const userStatus = document.getElementById('user-status');
    const lastSeen = document.getElementById('last-seen');
    const videoCallButton = document.getElementById('video-call-button');
    const audioCallButton = document.getElementById('audio-call-button');
    const fileInput = document.getElementById('file-input');
    const uploadButton = document.getElementById('upload-button');

    const socket = new WebSocket('ws://localhost:3000');

    // Function to add a message to the chat box
    function addMessage(message, sender, status) {
        const messageElement = document.createElement('div');
        const timestamp = new Date().toLocaleTimeString(); // Get current timestamp
        messageElement.textContent = timestamp + ' ' + sender + ': ' + message; // Include timestamp in message
        messageElement.classList.add('message', sender.toLowerCase());
        
        // Add status indicator based on status
        if (status === 'delivered') {
            messageElement.innerHTML += '<span class="status-indicator delivered">&#10003;</span>';
        } else if (status === 'read') {
            messageElement.innerHTML += '<span class="status-indicator read">&#10003;</span>';
        } else {
            messageElement.innerHTML += '<span class="status-indicator"></span>';
        }

        chatBox.appendChild(messageElement);
        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Event listener for sending messages
    sendButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            addMessage(message, 'You', 'sent'); // Assume sent status for own messages
            // Send message to server
            socket.send(message);
            // Clear input field
            messageInput.value = '';
        }
    });

    // Event listener for receiving messages
    socket.addEventListener('message', function(event) {
        const message = event.data;
        addMessage(message, 'Friend', 'delivered'); // Assume delivered status for received messages
    });

    // Simulate initial message from friend
    setTimeout(function() {
        addMessage('Hello!', 'Friend', 'delivered'); // Assume delivered status for initial message
    }, 500);

    // Event listener for file upload
    uploadButton.addEventListener('click', function() {
        const file = fileInput.files[0];
        if (file) {
            // Perform file upload operation here
            console.log('Uploading file:', file.name);
        }
    });

    // Sample functions for user status and call options
    function updateUserStatus(status) {
        userStatus.textContent = status;
    }

    function updateLastSeen(timestamp) {
        lastSeen.textContent = 'Last seen ' + timestamp;
    }

    function startVideoCall() {
        console.log('Starting video call...');
    }

    function startAudioCall() {
        console.log('Starting audio call...');
    }

    // Attach event listeners to call buttons
    videoCallButton.addEventListener('click', startVideoCall);
    audioCallButton.addEventListener('click', startAudioCall);

    // Sample usage of user status and last seen functions
    updateUserStatus('Online');
    updateLastSeen('10 minutes ago');
});
