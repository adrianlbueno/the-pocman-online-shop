import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";

export const Heading = () => {
    return (
        <div>
            <div className="flex items-center mt-24 mb-10">
                <div className="flex-grow text-left px-4 py-2 m-2">
                    <h5 className="text-gray-900 font-bold text-xl">Illustration Listing</h5>
                </div>
                <div className="flex-grow text-right px-4 py-2 m-2">
                    <Link to="/add">
                        <button
                            className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                            <FontAwesomeIcon icon={faCirclePlus} className="w-4 h-4"/>
                            <span className="pl-2">Add Illustration</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};