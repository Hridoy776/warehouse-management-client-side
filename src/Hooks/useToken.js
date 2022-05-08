import axios from "axios";
import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if(email){
        const { data } = await axios.post(
            `https://lit-oasis-49315.herokuapp.com/login`,
            { email }
          );
          setToken(data)
          localStorage.setItem("access_token", data);
      }
    };
    getToken();
  }, [user]);
  return[token]
};

export default useToken;
