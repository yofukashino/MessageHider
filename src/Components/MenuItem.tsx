import { components } from "replugged";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { MessageCacheActions, MessageContainerClasses } from "../lib/requiredModules";
import * as Icons from "./Icons";
import * as Utils from "../lib/utils";
import * as Types from "../types";

const {
  ContextMenu: { MenuItem, ItemColors },
} = components;

export default ({
  channel,
  message,
}: {
  channel: Types.Channel;
  message: Types.Message;
}): Types.ReactElement | null => {
  return (
    <MenuItem
      {...{
        id: "hide-message",
        label: "Hide Message",
        color: ItemColors.DANGER,
        icon: () => Icons.eye("18", "18"),
        action: () => {
          switch (SettingValues.get("superTemp", defaultSettings.superTemp)) {
            case true: {
              const messageElement = document.querySelector(
                `#chat-messages-${channel.id}-${message.id}`,
              ) as HTMLElement;
              if (messageElement) {
                messageElement.style.display = "none";
              }
              break;
            }
            case false: {
              const cache = MessageCacheActions.getOrCreate(channel.id);
              const modifiedCache = cache.remove(message.id);
              MessageCacheActions.commit(modifiedCache);
              Utils.forceRerenderElement(`.${MessageContainerClasses.messagesWrapper}`);
              break;
            }
          }
        },
      }}
    />
  );
};
