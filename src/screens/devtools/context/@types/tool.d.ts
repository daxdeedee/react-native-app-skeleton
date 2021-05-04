type ToolType = 'axiosLog' | undefined;

interface IDevTool {
  type: ToolType;
  setToolType: (type: ToolType) => void;
  closeToolBar: () => void;
  openToolBar: () => void;
}
