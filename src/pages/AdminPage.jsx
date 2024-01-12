import { Heading } from "../components/AdminHeading";
import IllustrationList from "../components/IllustrationList";
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