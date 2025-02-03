import ChevronLeftIcon from "../../assets/chevron-left.svg";

export const ChevronLeft: React.FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  return <img src={ChevronLeftIcon} width={width} height={height} />;
};
