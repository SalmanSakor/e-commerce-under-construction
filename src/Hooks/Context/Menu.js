import { createContext } from "react";
import useMode from "../../Hooks/CustomHooks/useMode";

export const Menu = createContext("");

const MenuContext = ({ children }) => {
  const [isOpen, setIsOpen] = useMode("isOpen", false);

  return (
    <Menu.Provider value={{ isOpen, setIsOpen }}>{children}</Menu.Provider>
  );
};
export default MenuContext;
