const AboutPage = () => {
    return (
            <div className="flex items-center justify-center p-12" id="about">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-fuchsia-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
                        Hi, my name is Adrian.
                    </p>
                    <p className="pb-5">
                         I am proficient in frontend skills such as React.js, Tailwind CSS, TypeScript, CSS3, and many more.
                    </p>
                    <p>
                        In my spare time I create stickers and do illustration.
                    </p>
                </div>

            </div>
    );
}

export default AboutPage;