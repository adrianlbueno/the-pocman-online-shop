import AddForm from '../form/AddForm.jsx';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  title: '',
  description: '',
  price: '',
  image: '',
};
const AddIllustration = () => {
  const methods = useForm({ defaultValues: initialValues });
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const token = localStorage.getItem('authToken');
  const onSubmit = async (data) => {
    try {
      const API_URL = `${process.env.VITE_APP_ONRENDER_URI}/api/illustrations`;
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(API_URL, requestOptions);
      console.log(response);
      if (response.ok) {
        navigate('/admin');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AddForm form={formData} handleChange={handleChange} />
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default AddIllustration;
