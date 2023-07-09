import { ImSpinner2 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ImSpinner2 className="text-6xl mt-40 animate-spin" />
    </div>
  );
};

export default Spinner;
