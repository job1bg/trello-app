import ChevronRightIcon from "../../assets/chevron-right.svg";

export const ChevronRight: React.FC<{
  size: number;
}> = ({ size }) => {
  return <img src={ChevronRightIcon} width={size} height={size} />;
};
