import { webpack } from "replugged";
import * as Types from "../types";

export const MessageCacheActions =
  webpack.getBySource<typeof Types.ChannelMessages>("this.revealedMessageId");

export const MessageContainerClasses = webpack.getByProps<Types.MessageContainerClasses>(
  "messages",
  "messagesWrapper",
  "scroller",
);
