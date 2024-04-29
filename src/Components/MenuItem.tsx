import { ContextMenu } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Icons from "./Icons";
import Utils from "../lib/utils";
import Types from "../types";

export default (
  {
    channel,
    message,
  }: {
    channel: Types.Channel;
    message: Types.Message;
  },
  menu: Types.MenuProps,
): React.ReactElement | null => {
  const MenuItem = (
    <ContextMenu.MenuItem
      id="hide-message"
      label="Hide Message"
      color={ContextMenu.ItemColors.DANGER}
      icon={() => <Icons.eye width="18" height="18" />}
      action={() => {
        if (SettingValues.get("superTemp", defaultSettings.superTemp)) {
          const messageElement = document.querySelector(
            `#chat-messages-${channel.id}-${message.id}`,
          ) as HTMLElement;
          if (messageElement) {
            messageElement.style.display = "none";
          }
          return;
        }
        const { MessageCacheActions, MessageContainerClasses } = Modules;
        const cache = MessageCacheActions.getOrCreate(channel.id);
        const modifiedCache = cache.remove(message.id);
        MessageCacheActions.commit(modifiedCache);
        Utils.forceRerenderElement(`.${MessageContainerClasses.messagesWrapper}`);
      }}
    />
  );
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
    return MenuItem;
  }
  const ItemIndex =
    Array.isArray(ItemGroup?.props?.children) &&
    (ItemGroup?.props?.children?.findIndex((item) => item?.props?.id === "delete") ??
      ItemGroup?.props?.children?.findIndex((item) => item?.props?.id === "report"));

  ItemGroup?.props?.children.splice(ItemIndex - 1, 0, MenuItem);
};
