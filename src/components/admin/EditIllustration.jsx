import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";

export const EditIllustration = () => {

    const [illustrations] = useFetchIllustrations();
    console.log(illustrations)
    const [selectedIllustration, setSelectedIllustration] = useState({
        id: null,
        title: "",
        description: "",
        price: 0,
        image: "",
    });

    const {editId} = useParams();
    const illustrationId = editId * 1;
    const illustrationToUpDate = illustrations.find(
        (illustration) => illustration.id === illustrationId
    );

    useEffect(() => {
        setSelectedIllustration(illustrationToUpDate);
    }, [illustrations, illustrationId]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
    };

    const handleOnChange = (illustrationKey, newValue) =>
        setSelectedIllustration({...selectedIllustration, [illustrationKey]: newValue});

    if (!selectedIllustration || !selectedIllustration.id) {
        return <div>Invalid Illustration ID.</div>;
    }

    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={handleOnSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedIllustration.title}
                            onChange={(e) => handleOnChange("title", e.target.value)}
                            type="text"
                            placeholder="Enter title"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedIllustration.description}
                            onChange={(e) => handleOnChange("description", e.target.value)}
                            type="text"
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="price"
                        >
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedIllustration.price}
                            onChange={(e) => handleOnChange("price", parseFloat(e.target.value))}
                            type="text"
                            placeholder="Enter price"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="image"
                        >
                            Image URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedIllustration.image}
                            onChange={(e) => handleOnChange("image", e.target.value)}
                            type="text"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div className="flex items-center justify-between">

                        <Link to="/admin">
                            <button
                                className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                                Done
                            </button>
                        </Link>
                        <Link to="/">
                            <button
                                className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};
