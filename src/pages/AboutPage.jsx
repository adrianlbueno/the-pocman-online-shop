import aboutImage from '../assets/the-pocman-img.jpg';

const AboutPage = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 md:px-40 py-20 md:flex-row flex-col items-center">
        <div className="md:w-2/3  font-nunito lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-11 md:mb-0 items-center text-center">
          <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-gray-900 tracking-normal whitespace-normal md:text-4xl ">
            Hi!, I am Adrian Bueno
          </h1>
          <p className="mt-4 mb-4 leading-relaxed text-xl w-full">
            <span className="text-2xl">
              Born in Ecuador and shaped by rich colors and traditions, I later
              moved to New York, where I spent years working, studying, and
              following my dreams. Today, Münster is home, the place where The
              Pocman began. What started as a small hobby slowly grew into
              something that could live anywhere — on a t-shirt, on the street,
              or in the digital world.
            </span>
          </p>
          <p className="leading-relaxed text-xl">
            <span className="text-2xl">
              I’m now working toward a new chapter: founding my own animation
              studio, where art, stories, and technology come together to help
              others bring their ideas to life.
            </span>
          </p>
        </div>
        <div className="md:w-1/3 ">
          <img
            className=" object-cover w-full h-full"
            alt="A person looking into the camera"
            src={aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
