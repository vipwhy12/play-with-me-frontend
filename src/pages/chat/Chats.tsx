import { useNavigate } from 'react-router-dom';

const Chat: React.FC = () => {
  const movePage = useNavigate();

  function goCreateChat() {
    movePage('/newchat');
  }

  return (
    <div>
      <button onClick={goCreateChat}>새로운 채팅방 생성</button>
    </div>
  );
};

export default Chat;
