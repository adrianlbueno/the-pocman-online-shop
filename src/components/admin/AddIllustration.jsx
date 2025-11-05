import AddForm from '../form/AddForm.jsx';
import { useState } from 'react';

const AddIllustration = () => {
  const initialValues = {
    title: '',
    description: '',
    price: '',
    image: '',
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {};

  return (
    <>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form>
          <AddForm
            onSubmit={handleSubmit}
            form={formData}
            handleChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default AddIllustration;
