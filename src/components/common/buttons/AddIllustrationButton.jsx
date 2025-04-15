import {useState} from "react";
import {useIllustrationsDispatch} from "../../../context/admin/IllustrationsContext.jsx";

const AddIllustrationButton = ({initialValues}) => {

    const [form, setForm] = useState(initialValues);
    const dispatch = useIllustrationsDispatch();

    let buttonStyle = "mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

    return (
        <>
            <button onClick={() => {
                setForm("");
                dispatch({
                    type: "ADD_ILLUSTRATION",
                    payload: form
                });
            }}
                    className={buttonStyle}>
                Add Illustration
            </button>
        </>
    )
}
export default AddIllustrationButton;