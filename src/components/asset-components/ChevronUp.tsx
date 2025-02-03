import ChevronUpIcon from "../../assets/chevron-up.svg";

export const ChevronUp: React.FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  return <img src={ChevronUpIcon} width={width} height={height} />;
};
