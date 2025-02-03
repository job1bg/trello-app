import ChevronDownIcon from "../../assets/chevron-down.svg";

export const ChevronDown: React.FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  return <img src={ChevronDownIcon} width={width} height={height} />;
};
