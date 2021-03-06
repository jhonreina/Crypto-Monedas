import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext"

export function Home() {

  const {user, logout, loading} = useAuth();

  console.log(user);
  
  const handleLogout = async () => {
   try {
    await logout();
   } catch (error) {
     console.log(error)
   }
    
  };

  if(loading) return <h1>loading...</h1>

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4">
          Welcome {user.displayName || user.email}
        </h1>
        <Link to="/tablecoins" className="text-blue-700">
          Login
        </Link>
      </div>
    </div>
  );
}

