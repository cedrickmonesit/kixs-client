import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/* Layout component makes it easier for us to change designs */
const Layout = () => {
    return (
        <main className="app-container">
            <Header />
                <Outlet /> {/* Outlet component from react-router-dom is used to render the child route elements of the parent route. Example parent route is / child route is /messages this will allow nested UI to show up when child routes are rendered */}
            <Footer />
        </main>
    )
}

export default Layout;