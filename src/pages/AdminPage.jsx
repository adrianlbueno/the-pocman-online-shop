import { Heading } from "../components/AdminHeading";
import IllustrationList from "../components/IllustrationList";
import { GlobalProvider } from '../context/globalStateContext';
const AdminPape = () => {
    return (
        <>
            <GlobalProvider>
                <div>
                    <Heading />
                    <IllustrationList />
                </div>
            </GlobalProvider>
        </>
    );
}

export default AdminPape;