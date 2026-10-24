
import { NavLink } from "react-router";

const NAVIGATION_LINKS = [
    {
        label: "Home",
        href: "/",
        external: false
    }
] as const;

const Topbar = () => {

    return(
        <header className="flex items-center">
            <nav className="mx-auto flex items-center justify-between px-6 py-4">

                <NavLink to={NAVIGATION_LINKS[0].href} className="font-semibold font-mono">
                    rcbalingbing
                </NavLink>
                
                <ul className="flex items-center gap-6">
                    
                </ul>

            </nav>
        </header>
    );

}

export default Topbar;