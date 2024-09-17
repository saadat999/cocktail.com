import { createContext, useState } from "react";

export const DATA_CONTEXT = createContext();

const AppContext = ({ children }) => {
    const [data, setData] = useState(null)
    const dataCon = {
        data, 
        setData
    }


  return (
    <DATA_CONTEXT.Provider value={dataCon}>
      {children}
    </DATA_CONTEXT.Provider>
  );
}

export default AppContext;
