import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/globalStateContext';

export const AddIllustration = () => {

    const { addIllustration, illustrations } = useContext(GlobalContext);

    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        image: ""
    });

    const [illustration, setIllustration] = useState(illustrations)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIllustration = {
            ...form
        };
        setIllustration([...illustration, addIllustration(newIllustration)])
        setForm("")
    };

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={form.title}
                            onChange={handleChange}
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gform.ray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={form.description}
                            onChange={handleChange}
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
                            value={form.price}
                            onChange={handleChange}
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
                            value={form.image}
                            onChange={handleChange}
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
