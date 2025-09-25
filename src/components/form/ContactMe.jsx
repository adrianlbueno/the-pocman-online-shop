import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { setTag } from '@sentry/react';

const ContactMe = () => {
  const form = useRef();
  const [message, setMessage] = useState({
    display: false,
    message: '',
    type: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleAlert = (message, type) => {
    setMessage({ display: false, message, type });
    setTimeout(() => {
      setMessage({ display: false, message: '', type: '' });
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.VITE_SERVICE_ID,
        process.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.VITE_PUBLC_KEY,
        }
      )
      .then(
        () => {
          setFormData({
            name: '',
            email: '',
            title: '',
            message: '',
          });
          toggleAlert('Thank you  for your message', 'success');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toggleAlert('Uh oh. Something went wrong.', 'danger');
        }
      );
  };

  return (
    <>
      <div>
        <form ref={form} onSubmit={sendEmail} noValidate>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className=" font-nunito w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              placeholder="example@domain.com"
              className="font-nunito w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="title"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              id="title"
              placeholder="Enter your subject"
              className="font-nunito w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              id="message"
              placeholder="Type your message"
              className="font-nunito w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="font-nunito hover:shadow-form rounded-md hover:bg-blue-500 bg-[#C025D3] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="font-nunito text-green-700">
          <div
            className={`alert alert-${message.type} alert-dismissible mt-5`}
            role="alert"
          >
            {message.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
