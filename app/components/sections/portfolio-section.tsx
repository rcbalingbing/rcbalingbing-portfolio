
import type { ReactNode } from "react";
import { NavLink } from "react-router";

interface PortfolioSectionProps {
    title: string;
    children: ReactNode;
    details?: string;
}

const PortfolioSection = ({ title, children, details }: PortfolioSectionProps) => {

    return(
        <section className="md:p-6 lg:p-6">

            {/* # section heading */}
            <div className="flex items-center justify-between">
                <h2 className="text-xs md:text-sm lg:text-sm font-bold font-mono"> {title}</h2>

                {details && (
                    <NavLink to={details} className="text-xs text-gray-600 underline hover:text-black">
                        view more
                    </NavLink>
                )}
            </div>

            {/* # section content */}
            <section>
                {children}
            </section>

        </section>
    );
}

export default PortfolioSection;