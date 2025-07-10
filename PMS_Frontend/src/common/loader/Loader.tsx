import { useAppSelector } from "../../app/hook";
import { PulseLoader } from "react-spinners";

const Loader: React.FC = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <PulseLoader
          color="#ffffff"
          loading={isLoading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loader;