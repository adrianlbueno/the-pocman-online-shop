import AboutImg from "../assets/the-pocman-img.jpg";

const AboutPage = () => {
    return (
        <section className="bg-secondery text-black px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-fuchsia-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
                        Hi, my name is Adrian.
                    </p>
                    <p className="pb-5">
                        am proficient in frontend skills such as React.js, Tailwind CSS, TypeScript, CSS3, and many more.
                    </p>
                    <p>
                        In my spare time I create stickers and do illustration.
                    </p>
                </div>
                <div>
                    <img
                        src={AboutImg}
                        alt="Profile picture"
                        className="rounded-full w-96 h-96"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutPage;