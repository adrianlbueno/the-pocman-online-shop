import { useFetchIllustrations } from "../../hooks/useFetchIllustrations.js";
import IllustrationData from "./IllustrationData.jsx";
import Loading from "../common/Loading.jsx";
import { useEffect, useState } from "react";

const Shop = () => {
  const [illustrations, isLoading] = useFetchIllustrations();
  const PAGE_SIZE = 12;

  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const numberOfItems = PAGE_SIZE * (index + 1);
    console.log("numberOfItems", numberOfItems);
    const newArray = [];
    for (let i = 0; i > illustrations.length; i++) {
      if (i < numberOfItems) {
        newArray.push(illustrations[i]);
      }
      console.log("newArray", newArray);
      setVisibleData(newArray);
    }
  }, [index]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-20"></div>
        <div className="flex flex-wrap -m-4 justify-center">
          {isLoading && <Loading />}
          {visibleData.map((illustrations) => {
            return (
              <IllustrationData key={illustrations.id} data={illustrations}>
                {illustrations}
              </IllustrationData>
            );
          })}
        </div>
        <div>
          <button onClick={() => setVisibleData(index + 1)}></button>
        </div>
      </div>
    </>
  );
};

export default Shop;
