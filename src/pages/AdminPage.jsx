import EmployeeList from "../components/IllustrationList";
import { GlobalProvider } from '../context/globalStateContext';
const AdminPape = () => {
    return (
        <GlobalProvider>
            <div>
                <EmployeeList />
            </div>
        </GlobalProvider>
    );
}

export default AdminPape;