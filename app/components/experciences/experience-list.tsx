
import type { ReactNode } from "react";

interface ExperienceListProps {
    children: ReactNode;
}

const ExperienceList = ({ children } : ExperienceListProps) => {

    return(
        <ul className="flex flex-col gap-y-2 pt-4">
            { children }
        </ul>
    );

}

export default ExperienceList;