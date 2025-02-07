import {Heading} from "../components/admin/AdminHeading";
import IllustrationList from "../components/admin/IllustrationList";
import {IllustrationsProvider} from "../context/admin/IllustrationsProvider.jsx";
const AdminPage = () => {
    return (
        <>
            <IllustrationsProvider>
            <Heading/>
            <IllustrationList/>
            </IllustrationsProvider>
        </>
    );
}

export default AdminPage;