
import type { ReactNode } from "react";

interface SocialLinkItemProps {
    icon: ReactNode;
    href: string;
    children: ReactNode;
}

const SocialLinkItem = ({ icon, href, children }: SocialLinkItemProps) => {

    const is_email = href.startsWith("mailto:");

    return(
        <li className="flex items-center gap-x-2">
            <span className="flex w-4 shrink-0 items-center justify-center">
                {icon}
            </span>

            <a
                href={href}
                target={is_email ? undefined : "_blank"}
                rel={is_email ? undefined : "noopener noreferrer"}
                className="min-w-0 break-all text-xs hover:text-black"
            >
                {children}
            </a>
        </li>
    );
}

export default SocialLinkItem;