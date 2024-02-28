import { ContextMenu } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { MessageCacheActions, MessageContainerClasses } from "../lib/requiredModules";
import Icons from "./Icons";
import Utils from "../lib/utils";
import Types from "../types";

export default ({
  channel,
  message,
}: {
  channel: Types.Channel;
  message: Types.Message;
}): React.ReactElement | null => {
  return (
    <ContextMenu.MenuItem
      {...{
        id: "hide-message",
        label: "Hide Message",
        color: ContextMenu.ItemColors.DANGER,
        icon: () => <Icons.eye width="18" height="18" />,
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
