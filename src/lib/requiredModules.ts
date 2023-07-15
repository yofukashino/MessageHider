import { webpack } from "replugged";
import * as Types from "../types";

export const MessageCacheActions = webpack.getByProps<Types.MessageCacheActions>(
  "commit",
  "getOrCreate",
);

export const MessageContainerClasses = webpack.getByProps<Types.MessageContainerClasses>(
  "messages",
  "messagesWrapper",
  "scroller",
);
