import ShopItem from "./ShopItem";
import { Link } from "react-router-dom";

const IllustrationData = ({data}) => {
    return (
            <>
                {data && data.map((illustration) => (
                    <div key={illustration.id}>
                        <Link to={`/illustrations/${illustration.id}`}>
                            <ShopItem id={illustration.id} title={illustration.title} description={illustration.description} price={illustration.price} url={illustration.image} />
                        </Link>
                    </div>
                ))}
            </>
    )
}

export default IllustrationData;