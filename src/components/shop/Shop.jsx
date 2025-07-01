import { useFetchIllustrations } from "../../hooks/useFetchIllustrations.js";
import IllustrationData from "./IllustrationData.jsx";
import Loading from "../common/Loading.jsx";
import { useEffect, useState } from "react";

const Shop = () => {
  const [illustrations, isLoading] = useFetchIllustrations();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-20"></div>
        <div className="flex flex-wrap -m-4 justify-center">
          {isLoading && <Loading />}
          <IllustrationData data={illustrations} />
        </div>
        <div>
          <button onClick={() => setVisibleData(index + 1)}></button>
        </div>
      </div>
    </>
  );
};

export default Shop;
