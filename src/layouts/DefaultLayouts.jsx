//importo
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DefaultLayouts(){
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
export default DefaultLayouts;