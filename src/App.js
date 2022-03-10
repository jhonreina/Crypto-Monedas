import {Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Register } from './components/Register';
import { AuthProvider } from './context/authContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableCoins from './components/Tablecoins';


function App()  {

  const [coins, setCoins]  = useState([])
 

  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    console.log(res.data)
    setCoins(res.data)
    
  }

  useEffect(()=>{
   getData()   
  },[])

  return (
    <div
      className="bg-slate-300 h-screen text-black flex "
      
    >
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tablecoins" element={<TableCoins coins={coins}  />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App