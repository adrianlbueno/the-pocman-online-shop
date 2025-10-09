import aboutImage from '../assets/the-pocman-img.jpg';

const AboutPage = () => {
  return (
    <div className="container mx-auto flex px-5 md:px-40 py-24 flex-row items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-xl text-lg mb-4 font-medium tracking-tighter text-[#BF25D3]">
          Hi! My name is Adrian Bueno
        </h1>
        <p>
          Born in Ecuador and shaped by rich colors and traditions, I later
          moved to New York, where I spent years working, studying, and
          following my dreams. Today, Münster is home, the place where The
          Pocman began. What started as a small hobby slowly grew into something
          that could live anywhere — on a t-shirt, on the street, or in the
          digital world.
        </p>

        <p>
          I’m now working toward a new chapter: founding my own animation
          studio, where art, stories, and technology come together to help
          others bring their ideas to life.
        </p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          src={aboutImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutPage;
