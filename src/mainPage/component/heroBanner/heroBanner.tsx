import { Navigate } from "react-router-dom";
import picture from "./test1.png";
import { useHeroBanner } from "./useHeroBanner";

export const HeroBanner = () => {
  const { toLogin } = useHeroBanner();

  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full flex-row">
        <div className="flex-1 bg-red-300">
          <h1 className="text-2xl">날 선택해줄 줄은 정말 몰랐어..</h1>
          <div className=" mt-5 mb-10">
            <span>
              이제 혼자하지 말고 200만 게임 유저와 실시간으로 선명한 음성 채팅과
              함께 Play with Me!
            </span>
          </div>
          <div className="flex justify-center gap-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex justify-center align-middle py-3 px-4 rounded-full"
              onClick={toLogin}
            >
              바로 시작 하기
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button
              className="bg-gray-100 hover:bg-gray-300 text-blue-700 font-bold py-3 px-4 rounded-full"
              onClick={toLogin}
            >
              로그인 없이 시작하기
            </button>
          </div>
        </div>

        <div className="flex-1 bg-blue-300">
          <div>
            <img src={picture} alt="test" />
          </div>
        </div>
      </div>
    </div>
  );
};
