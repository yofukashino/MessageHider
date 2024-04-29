import { types } from "replugged";
import { ChannelMessages as ChannelMessagesType } from "replugged/dist/renderer/modules/common/messages";
import { ContextMenuProps } from "replugged/dist/renderer/modules/components/ContextMenu";
import util from "replugged/util";
import GeneralDiscordTypes from "discord-types/general";

export namespace Types {
  export import DefaultTypes = types;
  export type Guild = GeneralDiscordTypes.Guild;
  export type Channel = GeneralDiscordTypes.Channel;
  export type User = GeneralDiscordTypes.User;
  export type Message = GeneralDiscordTypes.Message;
  export type UtilTree = util.Tree;
  export type ReactTree = util.Tree & React.ReactElement;
  export type ChannelMessages = typeof ChannelMessagesType;
  export type MenuProps = ContextMenuProps["ContextMenu"] & { children: React.ReactElement[] };
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
  export interface Modules {
    loadModules?: () => Promise<void>;
    MessageCacheActions?: ChannelMessages;
    MessageContainerClasses?: MessageContainerClasses;
  }
  export interface Settings {
    superTemp: boolean;
  }
}
export default Types;
