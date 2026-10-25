
import { NavLink } from "react-router";
import type { Route } from "./+types/home";

import EXPERIENCES from "~/data/experciences";
import ExperienceList from "~/components/experciences/experience-list";
import ExperienceItem from "~/components/experciences/experience-item";

import SocialLinkList from "~/components/social-links/social-link-list";
import SocialLinkItem from "~/components/social-links/social-link-item";

import { SiGithub, SiGitlab, SiGmail, SiHuggingface } from "@icons-pack/react-simple-icons";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "RCBalingbing" },
        {
            name: "Raymond C. Balingbing",
            content: "Welcome to my portfolio"
        }
    ];
}

const Home = () => {

    return(
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">

            {/* # profile card */}
            <aside className="w-full min-w-0 rounded-lg border border-gray-400/60 py-8 md:sticky md:top-24 md:max-h-[calc(100dvh-7rem)] md:overflow-y-auto">

                <section className="flex flex-col items-center gap-y-6">

                    {/* # profile picture */}
                    <img
                        src="/profile/marci-wackyy.png"
                        alt="Profile picture of Raymond C. Balingbing"
                        className="w-24 rounded-full"
                    />

                    {/* # name and username */}
                    <section className="flex flex-col items-center">
                        <h1 className="text-center font-semibold">
                            Raymond C. Balingbing
                        </h1>
                        <h2 className="text-sm text-gray-600">
                            @rcbalingbing
                        </h2>
                    </section>

                </section>

                <div className="h-[0.5px] my-8 w-full bg-gray-200"></div>

                {/* # socials and contact info */}
                <SocialLinkList>
                    <SocialLinkItem icon={<SiGithub className="w-4" />} href="https://github.com/rcbalingbing">
                        github.com/rcbalingbing
                    </SocialLinkItem>

                    <SocialLinkItem icon={<SiGitlab className="w-4" />} href="https://gitlab.com/rcbalingbing">
                        gitlab.com/rcbalingbing
                    </SocialLinkItem>

                    <SocialLinkItem icon={<SiHuggingface className="w-4" />} href="https://huggingface.co/rcbalingbing">
                        huggingface.co/rcbalingbing
                    </SocialLinkItem>

                    <SocialLinkItem icon={<SiGmail className="w-4" />} href="mailto:dev.rcbalingbing@gmail.com">
                        dev.rcbalingbing@gmail.com
                    </SocialLinkItem>

                    <SocialLinkItem icon={<SiGmail className="w-4" />} href="mailto:rcb2023-9793-64187@bicol-u.edu.ph">
                        rcb2023-9793-64187@bicol-u.edu.ph
                    </SocialLinkItem>
                </SocialLinkList>

            </aside>

            {/* # main portfolio content */}
            <div className="flex min-w-0 flex-col gap-y-6">

                {/* # tech stacks */}
                <section className="p-6">
                    <h2 className="font-semibold">tech stacks</h2>

                    <div className="mt-6">
                        {/* # tech stacls */}
                    </div>
                </section>

                {/* # projects */}
                <section className="p-6">
                    <h2 className="font-semibold">projects</h2>

                    <div className="mt-6">
                        {/* # projects */}
                    </div>
                </section>

                {/* # experiece */}
                <section className="p-2 md:p-6 lg:p-6">
                    
                    <section className="flex justify-between">
                        <h2 className="font-semibold text-sm">experience</h2>
                        <NavLink to="/" className="text-xs underline text-gray-600 hover:text-black"> more </NavLink>
                    </section>

                    <ExperienceList>
                        <ExperienceItem year="2026" role="Volunteer Developer & Maintainer" company="BetterMalinao" is_first_item={true} />
                        <ExperienceItem year="2026" role="Intern" company="Bicol Univeristy" />
                        <ExperienceItem year="2025 - 2026" role="Frontend Developer" company="Albay Reality" />
                    </ExperienceList>
                </section>

                {/* # certifications */}
                <section className="p-6">
                    <h2 className="font-semibold">certifications</h2>

                    <div className="mt-6">
                        {/* # certifications */}
                    </div>
                </section>

            </div>

        </section>
    );
};

export default Home;
