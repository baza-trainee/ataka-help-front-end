import { BallTriangle } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#618DFE"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
