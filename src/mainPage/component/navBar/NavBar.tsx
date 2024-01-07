import logo from "./logo.svg";

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-blue-100 text-black relative shadow-sm font-mono">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-24 w-24" />
        <div>
          <h1 className="text-2xl font-bold">플윗미</h1>
        </div>
      </div>

      <div>
        <ul className="flex gap-[70px]">
          <li>채팅방</li>
          <li>게임 정보</li>
          <li>커뮤니티</li>
        </ul>
      </div>

      <div className="flex gap-5">
        <button className="h-10 w-10 bg-gray-500 hover:bg-gray-700 text-white flex items-center justify-center font-bold py-2 px-4 rounded-[50%]">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          진행중인 채팅방
        </button>
      </div>
    </div>
  );
};
