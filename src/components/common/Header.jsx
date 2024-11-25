import headerImage from "../../assets/bg-illustration-pocmam.jpg";
import pocmanImage from "../../assets/bg-illustration-pocmam_mobile.jpg"

const Header = () => {
    return (
        <>
            <header>
                <div id="Home">

                    <picture>
                        <source srcSet={headerImage} media="(min-width: 1240px)"/>
                        <img src={pocmanImage} alt="image of girl seated on bed"/>
                    </picture>
                    <div className="absolute self-center">
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