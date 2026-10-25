
import type { ReactNode } from "react";

interface SocialLinkListProps {
    children: ReactNode;
}

const SocialLinkList = ({ children }: SocialLinkListProps) => {

    return(
        <ul className="flex flex-col gap-y-4 px-8 md:px-16 text-gray-600">
            {children}
        </ul>
    );
}

export default SocialLinkList;