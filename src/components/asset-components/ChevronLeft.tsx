import ChevronLeftIcon from "../../assets/chevron-left.svg";

export const ChevronLeft: React.FC<{
  size: number;
}> = ({ size }) => {
  return <img src={ChevronLeftIcon} width={size} height={size} />;
};
