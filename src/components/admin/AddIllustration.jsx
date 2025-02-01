import AddForm from "../form/AddForm.jsx";
import {useState} from "react";


 const AddIllustration = () => {

    const initialValues = {
        title: "",
        description: "",
        price: "",
        image: ""
    }

    const [form, setForm] = useState(initialValues);

    const handleChange = (event) => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <AddForm form={form} handleChange={handleChange}   />
            </div>

        </>
    );
}

export default AddIllustration;