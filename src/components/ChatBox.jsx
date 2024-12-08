import React from 'react';

const ChatBox = ({ chat }) => {
    return (
        <div className="chat-box">
            <p>{chat.message}</p>
        </div>
    );
};

export default ChatBox; 