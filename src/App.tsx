import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import { MainPage } from "./mainPage";
import { LoginPage } from "./loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<MainPage />} />
        {/* <SignIn /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <LogIn /> */}
        {/* <Route path="/login" element={<LogIn />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
