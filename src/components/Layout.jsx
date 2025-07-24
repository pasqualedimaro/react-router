//importo
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(){
    return(
        <>
        <Header />
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer/>
        </>
    )
}

//esporto
export default Layout;