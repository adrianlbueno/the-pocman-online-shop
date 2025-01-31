import { Link } from 'react-router-dom';
import {useIllustrationsDispatch} from "../../context/admin/IllustrationsContext.jsx";
import {useState} from "react";

export const AddIllustration = () => {
    const initialValues = {
        title: "",
        description: "",
        price: "",
        image: ""
    }
    const [form, setForm] = useState(initialValues);

    const dispatch = useIllustrationsDispatch();

    const handleChange = (event) => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form >
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
                            name="title"

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
                            name="description"
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
                            name="price"
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
                            name="image"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={()=> {
                            setForm(initialValues);
                            dispatch({
                                type: "ADD_ILLUSTRATION",
                                payload: form
                            });
                        }} className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
}
