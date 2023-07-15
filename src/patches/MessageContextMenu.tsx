import { PluginInjectorUtils } from "../index";
import mhMenuItem from "../Components/MenuItem";
import * as Types from "../types";
export const patchMessageContextMenu = (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.Message,
    ({ channel, message }) => {
      return mhMenuItem({
        channel: channel as Types.Channel,
        message: message as Types.Message,
      });
    },
    0,
  );
};
