
import { Outlet } from "react-router";

import Navbar from "~/components/navbar/navbar";

const MainLayout = () => {

    return(
        <div className="flex min-h-screen flex-col">
            
            <Navbar />

            <main className="mx-auto w-full max-w-[1600px] flex justify-center flex-1 px-6 pt-14 md:pt-20">
                <Outlet />
            </main>

            <footer>
                Raymond
            </footer>
        </div>
    );
}

export default MainLayout;