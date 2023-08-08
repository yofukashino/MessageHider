import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
const { SwitchItem } = components;
import * as Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): Types.ReactElement => {
  return (
    <div>
      <SwitchItem
        {...{
          ...util.useSetting(SettingValues, "superTemp", defaultSettings.superTemp),
          note: "Makes it so message reappear upon changing channels.",
        }}>
        Super Temporary
      </SwitchItem>
    </div>
  );
};
