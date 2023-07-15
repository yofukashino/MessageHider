import { components } from "replugged";
import { MessageCacheActions, MessageContainerClasses } from "../lib/requiredModules";
import * as Icons from "./Icons";
import * as Utils from "../lib/utils";
import * as Types from "../types";
const {
  ContextMenu: { MenuItem },
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
        color: "danger",
        icon: () => Icons.eye("18", "18"),
        action: () => {
          const cache = MessageCacheActions.getOrCreate(channel.id) as Types.MessageCacheProps;
          const modifiedCache = cache.remove(message.id);
          MessageCacheActions.commit(modifiedCache);
          Utils.forceRerenderElement(`.${MessageContainerClasses.messagesWrapper}`);
        },
      }}
    />
  );
};
