import {SpinningCircles} from 'react-loading-icons'


const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            Loading <SpinningCircles className="loaderIcon"/>
        </div>
    )
}
export default Loading;