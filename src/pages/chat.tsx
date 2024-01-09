import React, { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

interface ChatClientProps {
  chatId: number;
}

const Chat: React.FC<ChatClientProps> = ({ chatId }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newSocket = io('ws://localhost:8080/chats', {
      transports: ['websocket'],
    });

    newSocket.on('connect', () => {
      console.log('✨Connected to WebSocket server');
    });

    return () => {
      newSocket.disconnect();
      console.log('💥WebSocket 서버에서 연결이 끊겼습니다');
    };
  }, [chatId]);

  return (
    <div>
      <h2>Chat Room {chatId}</h2>

      <div
        ref={messagesRef}
        style={{
          maxHeight: '200px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
        }}
      ></div>
    </div>
  );
};

export default Chat;
