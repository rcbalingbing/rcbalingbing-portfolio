
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

interface ExperienceItemProps {
    year: string;
    role: string;
    company: string;
    is_first_item?: boolean;
}

const ExperienceItem = ({ year, role, company, is_first_item = false }: ExperienceItemProps) => {

    return(
        <li className={`flex flex-col gap-y-2 border-b border-gray-400/20 py-3 font-sans md:flex-row lg:flex-row md:items-center lg:items-center md:gap-x-4 lg:gap-x-4 ${is_first_item ? "border-t" : ""}`}>

            <h3 className="order-1 text-xs md:text-sm lg:text-sm font-semibold md:order-2 lg:order-2 md:flex-1 lg:flex-1 text-gray-600">
                {role}
            </h3>

            <div className="order-2 flex items-center gap-x-2 text-xs md:text-sm lg:text-sm text-gray-600/80 md:contents">

                <h4 className="md:order-1 lg:order-1 md:w-1/7 lg:w-1/7 font-mono">
                    {year}
                </h4>

                <span className="md:hidden lg:hidden">
                    ·
                </span>

                <h4 className="md:order-3 lg:order-3 md:text-right lg:text-right">
                    {company}
                </h4>

                <span className="md:order-4 lg:order-4 md:text-right lg:text-right ml-auto cursor-pointer">
                    <ArrowTrendingUpIcon className="w-4 font-regular hover:text-black" />
                </span>
            </div>
        </li>
    );
}

export default ExperienceItem;