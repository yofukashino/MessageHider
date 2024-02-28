import patchMessageContextMenu from "./MessageContextMenu";
export const applyInjections = (): void => {
  patchMessageContextMenu();
};

export default { applyInjections };
