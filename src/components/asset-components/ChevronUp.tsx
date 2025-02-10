import ChevronUpIcon from "../../assets/chevron-up.svg";

export const ChevronUp: React.FC<{
  size: number;
}> = ({ size }) => {
  return <img src={ChevronUpIcon} width={size} height={size} />;
};
