import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const SettingValues = await settings.init("dev.tharki.AlwaysTyping", defaultSettings);
export const PluginLogger = Logger.plugin("MessageHider");
import { registerSettings } from "./Components/Settings";
import { applyInjections } from "./patches/index";

export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings.jsx";
