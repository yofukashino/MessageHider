import { Injector, Logger } from "replugged";
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("MessageHider");
import { applyInjections } from "./patches/index";

export const start = (): void => {
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
