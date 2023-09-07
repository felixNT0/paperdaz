import React, { createContext, useContext, ReactNode, useEffect } from "react";

interface AppContextType {
  isLoading: boolean;
  isChatBoxOpen: boolean;
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  toggleChatBox: (state: boolean) => void;
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
}

const AppContext = createContext<AppContextType>({
  isLoading: false,
  isChatBoxOpen: false,
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
  toggleChatBox: () => {},
  toggleRegisterModal: () => {},
  toggleLoginModal: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isChatBoxOpen, setIsChatBoxOpen] = React.useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    React.useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    React.useState<boolean>(false);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
