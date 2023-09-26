import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ISubscriptionPayload } from "../types";

interface AppContextType {
  isLoading: boolean;
  isChatBoxOpen: boolean;
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  toggleChatBox: (state: boolean) => void;
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
  tableSubscriptionPayload: any;
  updateTableSubmitScriptionPayload: (data: ISubscriptionPayload) => void;
}

const AppContext = createContext<AppContextType>({
  isLoading: false,
  isChatBoxOpen: false,
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
  toggleChatBox: () => {},
  toggleRegisterModal: () => {},
  toggleLoginModal: () => {},
  tableSubscriptionPayload: {},
  updateTableSubmitScriptionPayload: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isChatBoxOpen, setIsChatBoxOpen] = React.useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    React.useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    React.useState<boolean>(false);
  const [tableSubscriptionPayload, setTableSubscriptionPayload] = useState();

  const updateTableSubmitScriptionPayload = (values: any) =>
    setTableSubscriptionPayload(values);

  const toggleChatBox = (state: boolean) => setIsChatBoxOpen(state);
  const toggleRegisterModal = () =>
    setIsRegisterModalOpen(!isRegisterModalOpen);
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isChatBoxOpen,
        toggleChatBox,
        isLoginModalOpen,
        isRegisterModalOpen,
        toggleRegisterModal,
        toggleLoginModal,
        tableSubscriptionPayload,
        updateTableSubmitScriptionPayload,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
