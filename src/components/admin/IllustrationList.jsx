import {Link} from 'react-router-dom';
import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const IllustrationList = () => {
    const [illustrations] = useFetchIllustrations();
    return (
        <>
            {!illustrations || illustrations.length === 0 ? (
                <p className="text-center bg-gray-100 text-gray-500 py-5">
                    No illustrations available.
                </p>
            ) : (
                illustrations.map(({id, title, description, price, image}) => (
                    <div className="flex items-center bg-gray-100 mb-10 shadow " key={id}>
                        <div className="flex-auto text-left px-4 py-2 m-2">
                            <div className="w-full">
                                <img src={image} alt={description} className="h-[100px] w-[100px]"/>
                            </div>
                            <p className="text-gray-900 leading-none">
                                {title}
                            </p>
                            <p className="text-gray-600">
                                {description}
                            </p>
                            <span className="inline-block text-sm font-semibold mt-1">
                                ${price}
                            </span>
                        </div>
                        <div className="flex-auto text-gray-800 text-right px-4 py-2 m-2">
                            <Link to={`/edit/${id}`} title="Edit Illustration">
                                <FontAwesomeIcon icon={faEdit}/>
                            </Link>
                            <FontAwesomeIcon icon={faTrash}/>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default IllustrationList;
