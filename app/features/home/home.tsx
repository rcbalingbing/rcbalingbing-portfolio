
import { NavLink } from "react-router";
import type { Route } from "./+types/home";

import EXPERIENCES from "~/data/experciences";
import ExperienceList from "~/components/experciences/experience-list";
import ExperienceItem from "~/components/experciences/experience-item";

import SocialLinkList from "~/components/social-links/social-link-list";
import SocialLinkItem from "~/components/social-links/social-link-item";

import PortfolioSection from "~/components/sections/portfolio-section";

import EducationAndCertificationsList from "~/components/educ-certs/EducationAndCerticationList";
import EducationAndCertificationsItem from "~/components/educ-certs/EducationAndCerticationItem";

import { SiGithub, SiGitlab, SiGmail, SiHuggingface } from "@icons-pack/react-simple-icons";

export function meta({}: Route.MetaArgs) {

    return [
        { title: "RCBalingbing" },
        {
            name: "description",
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
                    <div className="flex justify-center gap-x-4">
                        <SocialLinkItem name="GitHub" href="https://github.com/rcbalingbing" variant="text-link" />
                        <SocialLinkItem name="GitLab" href="https://gitlab.com/rcbalingbing" variant="text-link"/>
                        <SocialLinkItem name="HuggingFace" href="https://huggingface.co/rcbalingbing" variant="text-link"/>
                    </div>
                    <SocialLinkItem icon={<SiGmail className="w-4" />} name="dev.rcbalingbing@gmail.com" href="mailto:dev.rcbalingbing@gmail.com" />
                    <SocialLinkItem icon={<SiGmail className="w-4" />} name="rcb2023-9793-64187@bicol-u.edu.ph" href="mailto:rcb2023-9793-64187@bicol-u.edu.ph" />
                </SocialLinkList>

            </aside>

            {/* # main portfolio content */}
            <div className="flex min-w-0 flex-col gap-y-6">

                {/* # tech stacks */}
                <PortfolioSection title="tech stacks">
                    <p>Tech Stacks</p>
                </PortfolioSection>

                {/* # projects */}
                <PortfolioSection title="projects">
                    <p>Projects</p>
                </PortfolioSection>

                {/* # experiece */}
                <PortfolioSection title="experiences">
                    <ExperienceList>
                        <ExperienceItem year="2026" role="Volunteer Developer & Maintainer" company="BetterMalinao" is_first_item={true} />
                        <ExperienceItem year="2026" role="Intern" company="Bicol Univeristy" />
                        <ExperienceItem year="2025-2026" role="Frontend Developer" company="Albay Reality" />
                    </ExperienceList>
                </PortfolioSection>

                {/* # education and certifications */}
                <PortfolioSection title="education & certifications">
                    <EducationAndCertificationsList>
                        <EducationAndCertificationsItem variant="scholarship" name="Junior Level Science Scholarship" year="2025-2027" issuer="DOST-SEI, PH" logo="public/logo/dost-sei-logo.png" link_verification="test" />
                        <EducationAndCertificationsItem variant="education" name="BS Computer Science" year="2023 - 2026" issuer="Bicol University, College of Science, PH" logo="public/logo/bicol-university-logo.png" link_verification="test" />
                        <EducationAndCertificationsItem variant="certification" name="Data Visualization Workshop" year="May 2025" issuer="Zuitt Coding Bootcamp" logo="public/logo/zuitt-co-logo.png" link_verification="test" />
                    </EducationAndCertificationsList>
                </PortfolioSection>

            </div>

        </section>
    );
};

export default Home;
