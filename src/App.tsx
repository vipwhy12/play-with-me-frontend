import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chats from './pages/chat/Chats';
import NewChat from './pages/chat/Newchat';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/chats" element={<Chat />} />
           */}
          <Route path="/chats" element={<Chats />} />
          <Route path="/newchat" element={<NewChat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
