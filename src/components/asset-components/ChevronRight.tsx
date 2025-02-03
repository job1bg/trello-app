import ChevronRightIcon from "../../assets/chevron-right.svg";

export const ChevronRight: React.FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  return <img src={ChevronRightIcon} width={width} height={height} />;
};
