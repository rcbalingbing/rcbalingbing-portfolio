
import { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAVIGATION_LINKS = [
    {
        label: "Projects",
        href: "/projects",
        external: false
    },
    {
        label: "Services",
        href: "/services",
        external: false
    },
    {
        label: "Certifications",
        href: "/certifications",
        external: false
    },
    {
        label: "Blogs",
        href: "/blogs",
        external: false
    },
    {
        label: "Me",
        href: "/me",
        external: false
    }
] as const;

const Topbar = () => {

    // # handles sidebar visibility
    const [ is_sidebar_open, setIsSidebarOpen ] = useState<boolean>(false);

    const location = useLocation();

    // # closes the sidebar when navigating to another page
    useEffect(() => {
        setIsSidebarOpen(false);

    }, [location.pathname]);

    // # prevent scrolling while sidebar is open
    useEffect(() => {
        if(!is_sidebar_open) return;

        const previous_overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previous_overflow;
        }
    }, [is_sidebar_open]);

    // # closes the sidebar when esc key is pressed
    useEffect(() => {
        if(!is_sidebar_open) return;

        const handle_keydown = (event: KeyboardEvent) => {
            if(event.key === "Escape") {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("keydown", handle_keydown);

        return () => {
            document.removeEventListener("keydown", handle_keydown);
        };
    }, [is_sidebar_open]);
    

    return(
        <>
            <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white">
                <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 md:py-8 lg:py-8">

                    <NavLink to="/" className="font-mono font-semibold text-sm md:text-base lg:text-base">
                        rcbalingbing
                    </NavLink>

                    <button
                        type="button"
                        aria-label={is_sidebar_open ? "close menu" : "open menu"}
                        aria-expanded={is_sidebar_open}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsSidebarOpen(!is_sidebar_open)}
                        className="relative z-50 cursor-pointer text-gray-600 transition-colors hover:text-black md:hidden"
                    >
                        {is_sidebar_open ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars2Icon className="h-6 w-6" />
                        )}
                    </button>

                    {/* # top bar */}
                    <ul className="hidden md:flex lg:flex items-center gap-x-10 font-sans">
                        { NAVIGATION_LINKS.map((link) => {
                            if(link.external) {
                                return(
                                    <li>
                                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black">
                                            {link.label}
                                        </a>
                                    </li>
                                )
                            }

                            return(
                                <NavLink key={link.href} to={link.href} className={({isActive}) => 
                                    `text-sm transition-colors  ${isActive ? "font-semibold text-black" : "text-gray-600 hover:text-black"}`
                                }>
                                    {link.label}
                                </NavLink>
                            );
                        })}
                    </ul>
                </nav>
            </header>

            { /* # backdrop ref */ }
            <div
                aria-hidden="true"
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-30 bg-black/30 transition-opacity duration-300 md:hidden ${ is_sidebar_open ? "visible opacity-100" : "invisible opacity-0" }`}
            />

            {/* # mobile sidebar */}
            <aside
                id="mobile-navigation"
                aria-label="Mobile navigation"
                aria-hidden={!is_sidebar_open}
                inert={!is_sidebar_open}
                className={`fixed right-0 top-0 z-40 h-dvh w-72 max-w-[68vw] bg-white pt-24 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
                    is_sidebar_open
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col gap-y-2 px-6 font-sans">
                    {NAVIGATION_LINKS.map((link) => (
                        <li key={link.href}>
                            {link.external ? (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <NavLink
                                    to={link.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-4 py-3 text-sm transition-colors ${
                                            isActive
                                                ? "bg-gray-100 font-semibold text-black"
                                                : "text-gray-600 hover:bg-gray-100 hover:text-black"
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </>

    );

}

export default Topbar;