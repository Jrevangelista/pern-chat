import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userName: string, password: string) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      })
      const data = await res.json();
      if(!res.ok) throw new Error(data.error);
      setAuthUser(data);
      
    } catch (error:any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

  }
  return {loading, login};
}

export default useLogin