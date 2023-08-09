import Navbar from "../components/Navbar-header/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main data-testid="main-contents">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;