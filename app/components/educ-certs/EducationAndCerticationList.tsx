
import type { ReactNode } from "react";

interface EducationAndCertificationsListProps {
    children: ReactNode;
}

const EducationAndCertificationsList = ({ children } : EducationAndCertificationsListProps) => {

    return(
        <ul className="flex flex-col gap-2 pt-4 md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:pb-3 lg:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:pb-3 thin-scrollbar">
            { children }
        </ul>
    );

}

export default EducationAndCertificationsList;