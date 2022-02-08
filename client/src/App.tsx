import User from './components/user/User';
import UserSearch from './components/user/UserSearch';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/User/:user_id" element={<User />} />
      <Route path="/User/search" element={<UserSearch />} />
    </Routes>
  );
}

export default App;
