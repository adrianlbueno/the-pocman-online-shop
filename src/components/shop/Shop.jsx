import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";
import IllustrationData from "./IllustrationData.jsx";
import Loading from "../common/Loading.jsx";

const Shop = () => {
    const [illustrations, isLoading] = useFetchIllustrations()

    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-fuchsia-600">The Pocman
                        Illustration</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Are you who you want to be?</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {isLoading && <Loading/>}
                    <IllustrationData data={illustrations}/>
                </div>

            </div>
        </>);
}

export default Shop;