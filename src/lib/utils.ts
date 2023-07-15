import { util } from "replugged";
import { PluginInjector } from "../index";

export const forceRerenderElement = (selector: string): void => {
  const element = document.querySelector(selector);
  if (!element) return;
  const ownerInstance = util.getOwnerInstance(element);
  const unpatchRender = PluginInjector.instead(ownerInstance, "render", () => {
    unpatchRender();
    return null;
  });
  ownerInstance.forceUpdate(() => ownerInstance.forceUpdate(() => {}));
};
