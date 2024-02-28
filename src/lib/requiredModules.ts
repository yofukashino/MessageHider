import { webpack } from "replugged";
import Types from "../types";

export const MessageCacheActions =
  webpack.getBySource<Types.ChannelMessages>("this.revealedMessageId");

export const MessageContainerClasses = webpack.getByProps<Types.MessageContainerClasses>(
  "messages",
  "messagesWrapper",
  "scroller",
);
