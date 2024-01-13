import { Heading } from "../components/admin/AdminHeading";
import IllustrationList from "../components/admin/IllustrationList";
import { GlobalContextProvider } from "../context/globalStateContext";
const AdminPape = () => {
    return (
        <>
            <GlobalContextProvider value={{}}>
                <Heading />
                <IllustrationList />
            </GlobalContextProvider>

        </>
    );
}

export default AdminPape;