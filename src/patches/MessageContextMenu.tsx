import { PluginInjectorUtils } from "../index";
import menuItem from "../Components/MenuItem";
import Types from "../types";
export default (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.Message,
    (
      { channel, message }: { channel: Types.Channel; message: Types.Message },
      menu: Types.MenuProps,
    ) => {
      const ItemGroup = menu.children.find((element) =>
        element?.props?.children?.some?.(
          (item) => item?.props?.id === "delete" || item?.props?.id === "report",
        ),
      );
      if (ItemGroup) {
        ItemGroup.props.children = ItemGroup?.props?.children.filter(
          (c) => c?.props?.id !== "hide-message",
        );
      } else {
        return menuItem({
          channel: channel,
          message: message,
        });
      }
      const ItemIndex =
        Array.isArray(ItemGroup?.props?.children) &&
        (ItemGroup?.props?.children?.findIndex((item) => item?.props?.id === "delete") ??
          ItemGroup?.props?.children?.findIndex((item) => item?.props?.id === "report"));

      ItemGroup?.props?.children.splice(
        ItemIndex - 1,
        0,
        menuItem({
          channel: channel,
          message: message,
        }),
      );
    },
  );
};
