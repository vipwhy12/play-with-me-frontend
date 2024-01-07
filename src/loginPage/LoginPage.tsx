import { SocialLoginList } from "./SocialLoginList";

export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-black">
      <div className="bg-gray-200 w-[520px]">
        <div className="h-[80px] w-full bg-red-300">
          <h1 className="text-2xl">로그인</h1>
        </div>

        <div className="px-[20px]">
          <div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              이메일
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="example@naver.com"
            />
          </div>
          <div className="my-[20px] flex">
            <button className="bg-blue-500 hover:bg-blue-700 text-white flex-grow font-bold py-2 px-4 rounded">
              로그인
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <SocialLoginList />
        </div>

        <div className="bg-red-300 flex justify-center hover:cursor-pointer">
          <h3 className="text-lg mr-2">아직 회원이 아니신가요?</h3>
          <h3 className="text-lg font-bold">회원가입</h3>
        </div>
      </div>
    </div>
  );
};
