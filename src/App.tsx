import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chats from "./pages/chat/Chats";
import NewChat from "./pages/chat/Newchat";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/chats" element={<Chat />} />
           */}
          <Route path="/chats" element={<Chats />} />
          <Route path="/newchat" element={<NewChat />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
