import './App.css';
import Chat from './pages/chat';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/chats" element={<Chat />} />
           */}
          <Route path="/chats" element={<Chat chatId={1} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
