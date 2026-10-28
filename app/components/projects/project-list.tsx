
import type { ReactNode } from "react";

interface ProjectListProps {
    children: ReactNode;
}

const ProjectList = ({children} : ProjectListProps) => {

    return(
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-4">
            { children }
        </ul>
    );

}

export default ProjectList;