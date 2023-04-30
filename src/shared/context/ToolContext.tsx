import { createContext, useState } from 'react';

interface IComponentContext {
  modalActive: boolean;
  changeModal: (mood: boolean) => void;
}

export const ComponentContext = createContext<IComponentContext>({
  modalActive: false,
  changeModal: (mood: boolean) => {}
});

export const ComponentProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [modalActive, setModal] = useState(false);

  const changeModal = (mode: boolean) => {
    setModal(mode);
    console.log("first");
  };

  return (
    <ComponentContext.Provider value={{ modalActive, changeModal }}>
      {children}
    </ComponentContext.Provider>
  );
};

export default ComponentContext;
