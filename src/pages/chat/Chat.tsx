import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';

const Chat: React.FC = () => {
  const [socket, setSocket] = useState('');
  const location = useLocation();
  const chatData = { ...location.state };

  useEffect(() => {
    //컴포넌트가 마운트 될 때만 소켓을 생성하기
    const socket = io('ws://localhost:81/socket', {
      transports: ['websocket'],
    });

    console.log(socket);
    // 컴포넌트가 언마운트될 때 소켓 연결 해제
    return () => {
      socket.disconnect();
      alert('소켓 연결을 해제합니다.');
    };
  }, []);

  return (
    <div>
      <h1> 채팅방 페이지 입니다.</h1>
      {chatData && (
        <div>
          <p>채팅방 이름: {chatData.chatName}</p>
          {/* 다른 데이터도 여기서 렌더링 */}
        </div>
      )}
    </div>
  );
};

export default Chat;
