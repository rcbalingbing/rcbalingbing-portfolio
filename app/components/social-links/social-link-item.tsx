import type { ReactNode } from "react";

import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const SOCIAL_LINK_VARIANT = ["icon-link", "text-link", "default"] as const;

type SocialLinkVariant = (typeof SOCIAL_LINK_VARIANT)[number];

interface SocialLinkItemProps {
    icon?: ReactNode;
    name: string;
    href: string;
    variant?: SocialLinkVariant;
}

const SocialLinkItem = ({ icon, name, href, variant = "default" }: SocialLinkItemProps) => {

    const is_email = href.startsWith("mailto:");

    const show_icon = variant === "default" || variant === "icon-link";
    const show_text = variant === "default" || variant === "text-link";
    const show_arrow = variant === "text-link";

    return(
        <li className="flex items-center">
            <a
                href={href}
                target={is_email ? undefined : "_blank"}
                rel={is_email ? undefined : "noopener noreferrer"}
                aria-label={name}
                className="group flex min-w-0 items-center gap-x-2 text-xs md:text-sm lg:text-sm text-gray-600 hover:text-black"
            >
                {show_icon && icon && (
                    <span className="flex w-4 shrink-0 items-center justify-center">
                        {icon}
                    </span>
                )}

                {show_text && (
                    <span className="break-all">
                        {name}
                    </span>
                )}

                {show_arrow && (
                    <ArrowTrendingUpIcon
                        aria-hidden="true"
                        className="w-[10px] h-[10px] shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                )}
            </a>
        </li>
    );
}

export default SocialLinkItem;