
import type { Route } from "./+types/home";

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
                <section className="flex flex-col gap-y-4 px-8 md:px-16 lg:px-16 text-gray-600">

                    <section className="flex items-center gap-x-2">
                        <SiGithub className="w-4 shrink-0" />
                        <a
                            href="https://github.com/rcbalingbing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-0 break-all text-xs hover:text-black"
                        >
                            github.com/rcbalingbing
                        </a>
                    </section>

                    <section className="flex items-center gap-x-2">
                        <SiGitlab className="w-4 shrink-0" />
                        <a
                            href="https://gitlab.com/rcbalingbing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-0 break-all text-xs hover:text-black"
                        >
                            gitlab.com/rcbalingbing
                        </a>
                    </section>

                    <section className="flex items-center gap-x-2">
                        <SiHuggingface className="w-4 shrink-0" />
                        <a
                            href="https://huggingface.co/rcbalingbing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-0 break-all text-xs hover:text-black"
                        >
                            huggingface.co/rcbalingbing
                        </a>
                    </section>

                    <section className="flex items-center gap-x-2">
                        <SiGmail className="w-4 shrink-0" />
                        <a
                            href="mailto:dev.rcbalingbing@gmail.com"
                            className="min-w-0 break-all text-xs hover:text-black"
                        >
                            dev.rcbalingbing@gmail.com
                        </a>
                    </section>

                    <section className="flex items-center gap-x-2">
                        <SiGmail className="w-4 shrink-0" />
                        <a
                            href="mailto:rcb2023-9793-64187@bicol-u.edu.ph"
                            className="min-w-0 break-all text-xs hover:text-black"
                        >
                            rcb2023-9793-64187@bicol-u.edu.ph
                        </a>
                    </section>
                </section>

            </aside>

            {/* # main portfolio content */}
            <div className="flex min-w-0 flex-col gap-y-6">

                {/* # experiece */}
                <section className="rounded-lg border border-gray-400/60 p-6">
                    <h2 className="font-semibold">experience</h2>

                    <div className="mt-6">
                        {/* # experiences */}
                    </div>
                </section>

                {/* # tech stacks */}
                <section className="rounded-lg border border-gray-400/60 p-6">
                    <h2 className="font-semibold">tech stacks</h2>

                    <div className="mt-6">
                        {/* # tech stacls */}
                    </div>
                </section>

                {/* # projects */}
                <section className="rounded-lg border border-gray-400/60 p-6">
                    <h2 className="font-semibold">projects</h2>

                    <div className="mt-6">
                        {/* # projects */}
                    </div>
                </section>

                {/* # certifications */}
                <section className="rounded-lg border border-gray-400/60 p-6">
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
