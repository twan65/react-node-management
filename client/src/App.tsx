import Customer from './components/customer/Customer';
import CustomerSearch from './components/customer/CustomerSearch';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/customer/:userId" element={<Customer />} />
      <Route path="/customer/search" element={<CustomerSearch />} />
    </Routes>
  );
}

export default App;
