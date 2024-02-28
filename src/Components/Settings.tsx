import { SwitchItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): React.ReactElement => {
  return (
    <div>
      <SwitchItem
        note="Makes it so message reappear upon changing channels."
        {...Utils.useSetting(SettingValues, "superTemp", defaultSettings.superTemp)}>
        Super Temporary
      </SwitchItem>
    </div>
  );
};

export default { registerSettings, Settings };
