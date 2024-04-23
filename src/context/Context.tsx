import React from "react";
import { ContextType } from "../types/ContextType";

export const Context = React.createContext<ContextType | null>(null);
const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = React.useState<string>("irem");

  const values = { name, setName };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
