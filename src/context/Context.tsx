import React from "react";
import { ContextType } from "../types/ContextType";

export const Context = React.createContext<ContextType | null>(null);
const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>("/home");

  const values = { activeTab, setActiveTab };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
