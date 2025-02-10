import ChevronDownIcon from "../../assets/chevron-down.svg";

export const ChevronDown: React.FC<{
  size: number;
}> = ({ size }) => {
  return <img src={ChevronDownIcon} width={size} height={size} />;
};
