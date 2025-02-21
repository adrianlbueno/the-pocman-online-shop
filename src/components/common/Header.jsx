import headerImage from "../../assets/bg-illustration-pocmam.jpg";
import pocmanImage from "../../assets/bg-illustration-pocmam_mobile.jpg"

const Header = () => {
    return (
        <>
            <header>
                <div id="Home">
                        <picture>
                            <source srcSet={headerImage} media="(min-width: 1240px)"/>
                            <img className="bg-center bg-cover" src={pocmanImage} alt="image of girl seated on bed"/>
                        </picture>
                </div>
            </header>
        </>
    );
}

export default Header;