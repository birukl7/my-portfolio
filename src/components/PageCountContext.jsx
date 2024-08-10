import { Children, createContext, useContext, useEffect, useState } from "react";

 const CountContext = createContext()

export function useCount(){
  return useContext(CountContext)
}

export function CountProvider({children}){
  const [visitCount, setVisitCount] = useState(0)
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(()=>{
    const fetchVisitCount = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}`);
        

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

      
        const data = await response.json();
        setVisitCount(data.visits);

      } catch (err) {
        
        console.error('Error fetching visit count:', err);
        setError(err.message);
      }
    };

    fetchVisitCount()
  }, [apiBaseUrl])

  return (
    <CountContext.Provider value={{visitCount}}>
        {children}
    </CountContext.Provider>
  )
}