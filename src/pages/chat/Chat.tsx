import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useLocation } from "react-router-dom";

const Chat: React.FC = () => {
  const socketRef = useRef<Socket | null>(null);
  const location = useLocation();
  const chatData = { ...location.state };
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  console.log(chatData);

  useEffect(() => {
    // 소켓 인스턴스가 이미 존재하지 않는 경우에만 초기화
    if (!socketRef.current) {
      socketRef.current = io("ws://localhost:80/chat", {
        transports: ["websocket"],
      });

      socketRef.current.on("hello_from_server", (message: string) => {
        socketRef.current?.emit("enter_chat", chatData);
      });

      socketRef.current.on("receive_message", (message: string) => {
        console.log(message);
        setChatMessages((prevMessages) => [...prevMessages, message]); // 새 메시지를 상태에 추가s
      });
    }

    return () => {
      if (socketRef.current && socketRef.current.connected) {
        socketRef.current.disconnect();
        alert("소켓 연결을 해제합니다.");
      }
    };
  }, []);

  if (!socketRef) {
    // 만약 소켓이 초기화되지 않았다면 로딩 상태를 렌더링하거나 UI에서 처리
    return <div>로딩 중...</div>;
  }

  const sendMessage = () => {
    if (socketRef.current) {
      socketRef.current.emit("send_message", {
        channel: chatData.channel,
        message,
      });
      setMessage("");
    }
  };

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Chat Information
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              채팅방 이름
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {chatData.chatName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              게임이름
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {chatData.gameName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              gameDescription
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {chatData.gameDescription}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              채팅방 정원
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {chatData.numberOfChat}
            </dd>
          </div>
        </dl>
      </div>
      {/* 메시지 표시 영역 */}
      <div className="mt-6 bg-white border border-gray-300 p-4">
        {chatMessages.map((msg, index) => (
          <div key={index} className="p-2 border-b border-gray-200">
            {msg}
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add your comment
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            // name="comment"
            // id="comment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={sendMessage}
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default Chat;
