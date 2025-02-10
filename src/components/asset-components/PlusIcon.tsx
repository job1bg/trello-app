import PlusIcon from "../../assets/plus-circle.svg";

export const Plus: React.FC<{
  size: number;
}> = ({ size }) => {
  return <img src={PlusIcon} width={size} height={size} />;
};
