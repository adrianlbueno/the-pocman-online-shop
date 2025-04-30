import ShopItem from "./ShopItem";
import {Link} from "react-router-dom";

const IllustrationData = ({data}) => {
    return (
        <>
            {data && data.map((illustration) => (
                <div key={illustration.id}>
                    <Link to={`/illustrations/${illustration.id}`}>
                        <ShopItem id={illustration.id} url={illustration.image} name={illustration.name}/>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default IllustrationData;