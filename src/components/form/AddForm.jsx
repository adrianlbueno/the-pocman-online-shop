import { Link } from 'react-router-dom';
import AddIllustrationButton from '../common/buttons/AddIllustrationButton.jsx';
import { useFormContext } from 'react-hook-form';

const AddForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  let buttonStyle =
    'mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';

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
          {...register('title', {
            required: {
              value: true,
              message: 'Please enter a title',
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
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
          {...register('description', {
            required: {
              value: true,
              message: 'Please enter a description',
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gform.ray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
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
          {...register('price', {
            required: {
              value: true,
              message: 'Please enter a price',
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
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
          {...register('image', {
            required: {
              value: true,
              message: 'Please enter a price',
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          type="text"
          placeholder="Enter image URL"
          name="image"
        />
      </div>
      <div className="flex items-center justify-between">
        <button className={buttonStyle} type="submit">
          Add Illustration
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};
export default AddForm;
