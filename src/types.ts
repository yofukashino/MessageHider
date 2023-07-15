import { types as DefaultTypes } from "replugged";
import type { Message } from "discord-types/general";
export type { Message, Channel } from "discord-types/general";
export { types as DefaultTypes } from "replugged";
export type { ReactElement, ComponentClass } from "react";
export interface MessageCacheActionsPrototype {
  findNewest: DefaultTypes.AnyFunction;
  findOldest: DefaultTypes.AnyFunction;
  first: DefaultTypes.AnyFunction;
  focusOnMessage: DefaultTypes.AnyFunction;
  forAll: DefaultTypes.AnyFunction;
  forEach: DefaultTypes.AnyFunction;
  get: DefaultTypes.AnyFunction;
  getAfter: DefaultTypes.AnyFunction;
  getByIndex: DefaultTypes.AnyFunction;
  getManyAfter: DefaultTypes.AnyFunction;
  getManyBefore: DefaultTypes.AnyFunction;
  has: DefaultTypes.AnyFunction;
  hasAfterCached: DefaultTypes.AnyFunction;
  hasBeforeCached: DefaultTypes.AnyFunction;
  hasPresent: DefaultTypes.AnyFunction;
  indexOf: DefaultTypes.AnyFunction;
  jumpToMessage: DefaultTypes.AnyFunction;
  jumpToPresent: DefaultTypes.AnyFunction;
  last: DefaultTypes.AnyFunction;
  loadComplete: DefaultTypes.AnyFunction;
  loadFromCache: DefaultTypes.AnyFunction;
  loadStart: DefaultTypes.AnyFunction;
  map: DefaultTypes.AnyFunction;
  merge: DefaultTypes.AnyFunction;
  mergeDelta: DefaultTypes.AnyFunction;
  mutate: DefaultTypes.AnyFunction;
  receiveMessage: DefaultTypes.AnyFunction;
  receivePushNotification: DefaultTypes.AnyFunction;
  reduce: DefaultTypes.AnyFunction;
  remove: DefaultTypes.AnyFunction;
  removeMany: DefaultTypes.AnyFunction;
  replace: DefaultTypes.AnyFunction;
  reset: DefaultTypes.AnyFunction;
  toArray: DefaultTypes.AnyFunction;
  truncate: DefaultTypes.AnyFunction;
  truncateBottom: DefaultTypes.AnyFunction;
  truncateTop: DefaultTypes.AnyFunction;
  update: DefaultTypes.AnyFunction;
  _clearMessages: DefaultTypes.AnyFunction;
  _merge: DefaultTypes.AnyFunction;
  length: number;
}

export interface MessageCacheProps extends MessageCacheActionsPrototype {
  cached: boolean;
  channelId: null | string | number;
  error: boolean;
  hasFetched: boolean;
  hasMoreAfter: boolean;
  hasMoreBefore: boolean;
  jumpFlash: boolean;
  jumpReturnTargetId: null | string | number;
  jumpSequenceId: null | string | number;
  jumpTargetId: null | string | number;
  jumpTargetOffset: null | string | number;
  jumpType: null | string | number;
  jumped: boolean;
  jumpedToPresent: boolean;
  loadingMore: boolean;
  ready: boolean;
  revealedMessageId: null | string | number;
  _after: {
    _isCacheBefore: boolean;
    _map: Record<string, Message>;
    _messages: Message[];
    _wasAtEdge: boolean;
  };
  _array: Message[];
  _before: {
    _isCacheBefore: boolean;
    _map: Record<string, Message>;
    _messages: Message[];
    _wasAtEdge: boolean;
  };
  _map: Record<string, Message>;
}

export interface MessageCacheActions
  extends DefaultTypes.AnyFunction,
    MessageCacheActionsPrototype {
  clear: DefaultTypes.AnyFunction;
  clearCache: DefaultTypes.AnyFunction;
  commit: DefaultTypes.AnyFunction;
  forEach: DefaultTypes.AnyFunction;
  get: DefaultTypes.AnyFunction;
  getOrCreate: DefaultTypes.AnyFunction;
  hasPresent: DefaultTypes.AnyFunction;
  _channelMessages: Record<string, MessageCacheProps>;
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
