export const SocialLoginList = () => {
  return (
    <div className="flex flex-col w-[320px] gap-3">
      <div className="flex flex-grow">
        <button className="bg-blue-500 hover:bg-blue-700 text-white flex-grow font-bold py-2 px-4 rounded">
          facebook
        </button>
      </div>
      <div className="flex flex-grow">
        <button className="bg-yellow-400 hover:bg-yellow-600 text-white flex-grow font-bold py-2 px-4 rounded">
          kakao
        </button>
      </div>
      <div className="flex flex-grow">
        <button className="bg-green-500 hover:bg-green-700 text-white flex-grow font-bold py-2 px-4 rounded">
          naver
        </button>
      </div>

      <div className="flex flex-grow">
        <button className="bg-gray-500 hover:bg-gray-700 text-white flex-grow font-bold py-2 px-4 rounded">
          google
        </button>
      </div>
    </div>
  );
};
