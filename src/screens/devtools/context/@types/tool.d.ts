type ToolType = 'axiosLog' | 'resize' | undefined;

interface IDevTool {
  type: ToolType;
  setToolType: (type: ToolType) => void;
  closeToolBar: () => void;
  openToolBar: () => void;
}
