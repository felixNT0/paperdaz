import { ThreeDots } from "react-loader-spinner";
import { PRIMARY_COLOR } from "../../utils/color";

function Loader() {
  return (
    <div className="bg-white flex justify-center items-center w-screen h-screen">
      <ThreeDots
        height="100"
        width="100"
        radius="10"
        color={PRIMARY_COLOR}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}

export default Loader;
