import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.MessageCacheActions ??= await webpack
    .waitForModule<Types.ChannelMessages>(webpack.filters.bySource("this.revealedMessageId"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MessageCacheActions Module");
    });

  Modules.MessageContainerClasses ??= await webpack
    .waitForProps<Types.MessageContainerClasses>(["emptyForum", "messagesWrapper", "scroller"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MessageContainerClasses Module");
    });
};

export default Modules;
