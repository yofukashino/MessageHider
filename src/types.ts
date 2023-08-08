import type { ChannelMessages } from "replugged/dist/renderer/modules/common/messages";
export type { Message, Channel } from "discord-types/general";
export { types as DefaultTypes } from "replugged";
export type { ReactElement, ComponentClass } from "react";
export type { ChannelMessages } from "replugged/dist/renderer/modules/common/messages";
export interface MessageCache extends ChannelMessages {
  remove: (id: string) => ChannelMessages;
  commit: (cache: typeof ChannelMessages) => void;
}

export interface MessageCacheActions extends ChannelMessages {
  getOrCreate: (id: string) => MessageCache;
  commit: (cache: ChannelMessages) => void;
}

export interface MessageContainerClasses {
  divider: string;
  empty: string;
  emptyForum: string;
  messageGroupBlocked: string;
  messages: string;
  messagesWrapper: string;
  navigationDescription: string;
  scroller: string;
  scrollerContent: string;
  scrollerInner: string;
  scrollerSpacer: string;
  scrollerWrap: string;
}

export interface Settings {
  superTemp: boolean;
}
