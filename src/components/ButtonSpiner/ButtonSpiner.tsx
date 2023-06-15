import { RotatingLines } from "react-loader-spinner";

const ButtonSpiner = () => {
  return (
    <RotatingLines
      strokeColor="#618DFE"
      strokeWidth="5"
      animationDuration="0.75"
      width="40"
      visible={true}
    />
  );
};

export default ButtonSpiner;
