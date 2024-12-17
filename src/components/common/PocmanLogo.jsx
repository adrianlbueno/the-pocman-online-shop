import {Link} from "react-router-dom";
import pocmanLogo from "../../assets/logo-pocman.png";

const PocmanLogo = () => {

    return (
        <Link to="/" className="w-24">
            <div className="cursor-pointer sm:h-auto sm:w-auto">
                <img src={pocmanLogo} alt="The pocman logo"/>
            </div>
        </Link>
    )
}

export default PocmanLogo;