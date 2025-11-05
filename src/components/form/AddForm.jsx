import { Link } from 'react-router-dom';
import AddIllustrationButton from '../common/buttons/AddIllustrationButton.jsx';

const AddForm = ({ form, handleChange }) => {
  return (
    <div>
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
        <AddIllustrationButton />
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};
export default AddForm;
