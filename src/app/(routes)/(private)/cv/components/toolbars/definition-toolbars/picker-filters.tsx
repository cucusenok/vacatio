"use client";

import { type SettingsState, useSettings } from "@/cv/stores/use-settings";
import { Switch } from "@/ui";

type Key = keyof Pick<SettingsState, "hidePresent" | "updateHomeResume">;
type Props = Partial<Record<Key, boolean>>;

export const PickerFilters = (props: Props) => {
  const { hidePresent, updateHomeResume } = props;
  const settings = useSettings();

  const onHidePresentChange = (value: boolean) => {
    settings.setHidePresent(value);
  };

  const onUpdateHomeResumeChange = (value: boolean) => {
    settings.setUpdateHomeResume(value);
  };

  return (
    <footer className="flex-y gap-4">
      {hidePresent && (
        <label className="flex-y cursor-pointer select-none gap-2 whitespace-nowrap">
          <Switch checked={settings.hidePresent} onCheckedChange={onHidePresentChange} />
          Hide already added
        </label>
      )}
      {updateHomeResume && (
        <label className="flex-y cursor-pointer select-none gap-2 whitespace-nowrap">
          <Switch checked={settings.updateHomeResume} onCheckedChange={onUpdateHomeResumeChange} />
          Update home resume
        </label>
      )}
    </footer>
  );
};
