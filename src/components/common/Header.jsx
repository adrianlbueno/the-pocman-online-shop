import headerImage from "../../assets/bg-illustration-pocmam.jpg";

const Header = () => {
    return (
        <>
            <header>
                <div id="Home"
                     className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover"
                     style={{backgroundImage: `url(${headerImage})`}}
                >
                    <div className="text-white">
                        <h1 className="text-4xl font-bold ">
                            Welcome
                        </h1>
                    </div>

                </div>
            </header>
        </>
    );
}

export default Header;