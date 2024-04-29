import Modules from "../lib/requiredModules";
import injectMessageContextMenu from "./MessageContextMenu";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectMessageContextMenu();
};

export default { applyInjections };
