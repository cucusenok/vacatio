import { cn } from "@/helpers/object.helpers";
import { Switch, type SwitchProps } from "@/ui";

type Props = {
  label: string;
} & SwitchProps;

export const SwitchItem = (props: Props) => {
  const { label, className, ...rest } = props;

  return (
    <label className={cn("flex-y cursor-pointer gap-2 text-sm", className)}>
      <Switch {...rest} />
      <span className="select-none">{label}</span>
    </label>
  );
};
