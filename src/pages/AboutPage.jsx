import AboutImg from "../assets/the-pocman-img.jpg";

const AboutPage = () => {
    return (
        <section className="bg-secondery text-black px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
                        Hi, My Name is Adrian Bueno everyone calls me Abu or the pocman. I am an Artist.
                    </p>
                    <p className="pb-5">
                        I am proficient in Frontend skills like React.js, Tailwind CSS, TypeScript Css3 and many more.
                    </p>
                    <p>In backend I know Node.js</p>
                    <p>
                        In my spare time I create stickers and do illustration.
                    </p>
                </div>
                <div className="about-img">
                    <img
                        src={AboutImg}
                        alt="coding illustration"
                        className="lgw-[80%] md:ml-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutPage;