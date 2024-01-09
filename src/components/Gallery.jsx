const Gallery = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">The Pocman Illustration</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Are you who you want to be?</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                    </div >
                </div>
            </section>
        </>);
}

export default Gallery;