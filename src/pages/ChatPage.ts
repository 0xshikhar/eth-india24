import React from 'react';
import ChatBox from '../components/ChatBox';
import dummyChats from '../data/dummyChats';

const ChatPage: React.FC = () => {
    return (
        <div className="chat-page">
            <h1 className="text-2xl font-bold">Chat</h1>
            {dummyChats.map(chat => (
                <ChatBox key={chat.id} chat={chat} />
            ))}
        </div>
    );
};

export default ChatPage; 