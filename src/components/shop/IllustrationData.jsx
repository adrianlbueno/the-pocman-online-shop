import ShopItem from "./ShopItem";
import { Link } from "react-router-dom";

const IllustrationData = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No illustrations available</p>;
  }
  return (
    <>
      {data &&
        data.map((illustration) => (
          <div key={illustration._id}>
            <Link to={`/illustrations/${illustration.id}`}>
              <ShopItem
                id={illustration.id}
                url={illustration.image}
                name={illustration.name}
              />
            </Link>
          </div>
        ))}
    </>
  );
};

export default IllustrationData;
