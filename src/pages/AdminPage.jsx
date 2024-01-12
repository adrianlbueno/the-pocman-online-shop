import { Heading } from "../components/AdminHeading";
import EmployeeList from "../components/IllustrationList";
import { GlobalProvider } from '../context/globalStateContext';
const AdminPape = () => {
    return (
        <>
            <GlobalProvider>
                <div>
                    <Heading />
                    <EmployeeList />
                </div>
            </GlobalProvider>
        </>
    );
}

export default AdminPape;