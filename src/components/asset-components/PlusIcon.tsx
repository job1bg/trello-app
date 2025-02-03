import PlusIcon from "../../assets/plus-circle.svg";

export const Plus: React.FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  return <img src={PlusIcon} width={width} height={height} />;
};
