import { PluginInjectorUtils } from "../index";
import mhMenuItem from "../Components/MenuItem";
import * as Types from "../types";
export const patchMessageContextMenu = (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.Message,
    ({ channel, message }, menu) => {
      const ItemGroup = (menu.children as Types.ReactElement[]).find((element) =>
        element?.props?.children?.some?.(
          (item) => item?.props?.id === "delete" || item?.props?.id === "report",
        ),
      );
      const ItemIndex =
        Array.isArray(ItemGroup?.props?.children) &&
        (ItemGroup?.props?.children?.findIndex((item) => item?.props?.id === "delete") ??
          ItemGroup?.props?.children?.findIndex((item) => item?.props?.id === "report"));
      if (!ItemIndex) {
        (menu.children as Types.ReactElement[])
          .find((element) => element?.props?.id === "replugged")
          .props.children.push(
            mhMenuItem({
              channel: channel as Types.Channel,
              message: message as Types.Message,
            }),
          );
        return;
      }
      ItemGroup.props.children = ItemGroup?.props?.children.filter(
        (c) => c?.props?.id !== "hide-message",
      );
      ItemGroup?.props?.children.splice(
        ItemIndex,
        0,
        mhMenuItem({
          channel: channel as Types.Channel,
          message: message as Types.Message,
        }),
      );
    },
  );
};
