import React, { createContext, useState } from 'react';

const defaultToolContext: IDevTool = {
  type: undefined,
  setToolType: () => {},
  closeToolBar: () => {},
  openToolBar: () => {},
};

const ToolContext = createContext(defaultToolContext);

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

const ToolContextProvider = ({ children }: IProps) => {
  const [type, setType] = useState<ToolType>(undefined);

  const setToolType = (type: ToolType) => {
    setType(type);
  };

  const closeToolBar = () => {
    // TODO close Bar
  };

  const openToolBar = () => {
    // TODO open Bar
  };

  return (
    <ToolContext.Provider
      value={{
        type,
        setToolType,
        closeToolBar,
        openToolBar,
      }}>
      {children}
    </ToolContext.Provider>
  );
};

export { ToolContext, ToolContextProvider };
