import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchIllustrations } from '../../hooks/useFetchIllustrations.js';

export const EditIllustration = () => {
  const [illustrations] = useFetchIllustrations();
  const [formData, setFormData] = useState(null);
  const { error, setError } = useState(null);
  const { editId } = useParams();
  const navigate = useNavigate();
  const illustrationId = editId;
  const token = localStorage.getItem('authToken');

  const illustrationToUpdate = illustrations.find(
    (illustration) => illustration.id === illustrationId
  );

  useEffect(() => {
    if (illustrationToUpdate) {
      const { _id, id, title, description, price, image } =
        illustrationToUpdate;
      setFormData({ _id, id, title, description, price, image });
    }
  }, [illustrationToUpdate]);

  const handleOnSubmit = async () => {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
    try {
      const URL_API = `https://the-pocman-backend.onrender.com/illustrations/${formData._id}`;
      const response = await fetch(URL_API, requestOptions);
      if (response.ok) {
        navigate('/admin');
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const handleOnChange = (field) => (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  if (!formData || !formData.id) {
    return <div>Loading illustration...</div>;
  }

  return (
    <div className="w-full max-w-sm container mt-20 mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit(formData);
        }}
      >
        <div className="w-full mb-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            value={formData.title}
            onChange={handleOnChange('title')}
            type="text"
            placeholder="Enter title"
          />
        </div>

        <div className="w-full mb-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            value={formData.description}
            onChange={handleOnChange('description')}
            type="text"
            placeholder="Enter description"
          />
        </div>

        <div className="w-full mb-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            value={formData.price}
            onChange={handleOnChange('price')}
            type="text"
            placeholder="Enter price"
          />
        </div>

        <div className="w-full mb-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            value={formData.image}
            onChange={handleOnChange('image')}
            type="text"
            placeholder="Enter image URL"
          />
        </div>

        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="block mt-5 bg-green-400 w-1/2 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Done
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="block mt-5 bg-gray-400 w-1/2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
