import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/globalStateContext';

export const AddIllustration = () => {
    let history = useHistory();

    const { addIllustration, illustrations } = useContext(GlobalContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newIllustration = {
            id: illustrations.length + 1,
            title,
            description,
            price: parseFloat(price),
            image,
        };
        addIllustration(newIllustration);
        history.push("/");
    };

    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Enter title"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="price"
                        >
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            placeholder="Enter price"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="image"
                        >
                            Image URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            type="text"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Illustration
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    );
};
