import ContactMe from "../components/form/ContactMe.jsx";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <h1 className=" font-nunito font-extrabold text-[32px] text-center">
            Let's Get in Touch
          </h1>
          <ContactMe />
        </div>
      </div>
    </>
  );
};

export default Contact;
