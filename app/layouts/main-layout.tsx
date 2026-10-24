
import { Outlet } from "react-router";

import Topbar from "~/components/topbar/topbar";

const MainLayout = () => {

    return(
        <div className="flex min-h-screen flex-col">
            
            <Topbar />

            <main className="mx-auto w-full flex-1 px-6 py-8">
                <Outlet />
            </main>

            <footer>
                Raymond
            </footer>
        </div>
    );
}

export default MainLayout;