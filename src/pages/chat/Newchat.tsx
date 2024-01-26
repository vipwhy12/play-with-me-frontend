import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewChat: React.FC = () => {
  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState("");
  const [chatName, setChatName] = useState("");
  const [numberOfChat, setNumberOfChat] = useState("");
  const navigate = useNavigate();

  const getGameName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGameName(event.target.value);
  };

  const getGameDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const maxLength = 200;
    const newText = event.target.value;

    if (newText.length <= maxLength) {
      setGameDescription(newText);
    }
  };

  const getChatName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatName(event.target.value);
  };

  const getNumberOfChat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfChat(event.target.value);
  };

  function handleSubmit(event: React.FormEvent) {
    if (!chatName) {
      alert("🚨채팅방 이름을 작성해주세요🚨");
      return;
    }

    if (Number(numberOfChat) < 1) {
      alert("🚨채팅방의 인원수는 1명 이상이여야 합니다.🚨");
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_BACK_ORIGIN}/chats`,
        {
          userIds: [3], //TODO : 로그인 시 , 회원 정보 ID 전송
          gameName,
          gameDescription,
          chatName,
          numberOfChat: Number(numberOfChat),
        },
        { withCredentials: true }
      )
      .then((response) => {
        alert("채팅방 생성완료!");

        navigate("/chat", { state: response.data });
      })
      .catch((error) => {
        alert("채팅방 생성에 실패하였습니다!");
      });
  }

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            채팅방 만들기
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            ✨같이 게임할 팀원들을 만들어보세요!✨
          </p>

          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="chatname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                채팅방 이름
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="chatname"
                    id="chatname"
                    autoComplete="chatname"
                    value={chatName}
                    onChange={getChatName}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="채팅방 이름을 입력해주세요!"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="gamename"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                🎮 게임명
              </label>
              <div className="mt-2">
                <select
                  id="gamename"
                  name="gamename"
                  autoComplete="game-name"
                  value={gameName}
                  onChange={getGameName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>선택하기</option>
                  <option>몬스터헌터</option>
                  <option>리그오브레전드</option>
                  <option>오버워치2</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="gameDescription"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                채팅방을 소개해보세요!
              </label>
              <div className="mt-2">
                <textarea
                  id="gameDescription"
                  name="gameDescription"
                  value={gameDescription}
                  onChange={getGameDescription}
                  placeholder="최대 200자까지 입력 가능합니다."
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            채팅 참여 조건
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="numberOfChat"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                인원
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="street-numberOfChat"
                  id="numberOfChat"
                  autoComplete="numberOfChat"
                  value={numberOfChat}
                  onChange={getNumberOfChat}
                  defaultValue={1000}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default NewChat;
