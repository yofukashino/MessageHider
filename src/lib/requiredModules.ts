import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.MessageCacheActions ??= await webpack.waitForModule<Types.ChannelMessages>(
    webpack.filters.bySource("this.revealedMessageId"),
  );
  Modules.MessageContainerClasses ??= await webpack.waitForProps<Types.MessageContainerClasses>(
    "messages",
    "messagesWrapper",
    "scroller",
  );
};

export default Modules;
