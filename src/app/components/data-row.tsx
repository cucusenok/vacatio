import { DottedLine } from "./dotted-line";

export const DataRow = (props: { name: string; value: string }) => {
  const { name, value } = props;
  return (
    <div className="text-secondary relative flex gap-2">
      <span className="whitespace-nowrap">{name}</span>
      <DottedLine />
      <span className="whitespace-nowrap">{value}</span>
    </div>
  );
};
