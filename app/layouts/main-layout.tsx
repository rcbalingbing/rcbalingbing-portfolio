
import { Outlet } from "react-router";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";

const MainLayout = () => {

    return(
        <div className="flex min-h-screen flex-col">
            
            <Navbar />

            <main className="mx-auto w-full max-w-[1600px] flex justify-center flex-1 px-6 pt-14 md:pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;