import headerImage from "../../assets/bg-illustration-pocmam.jpg";
import pocmanImage from "../../assets/bg-illustration-pocmam_mobile.jpg"

const Header = () => {
    return (
        <>
            <header>
                <div id="Home" className="flex items-center">
                    <div className="relative w-max">
                    <picture>
                        <source srcSet={headerImage} media="(min-width: 1240px)"/>
                        <img src={pocmanImage} alt="image of girl seated on bed"/>
                    </picture>
                    </div>
                    <div
                        className="absolute text-2xl md:text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl font-bold">
                            Welcome
                        </h1>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;