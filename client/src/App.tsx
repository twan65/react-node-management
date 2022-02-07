import Customer from './components/customer/Customer';
import CustomerSearch from './components/customer/CustomerSearch';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/customer/:user_id" element={<Customer />} />
      <Route path="/customer/search" element={<CustomerSearch />} />
    </Routes>
  );
}

export default App;
