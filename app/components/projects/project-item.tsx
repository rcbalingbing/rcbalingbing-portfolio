import { NavLink } from "react-router";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import type { Project } from "~/data/projects";

const ProjectItem = ({logo_path, title, date, type, categories, abstract, tools, demo_link, github_link} : Project) => {

    return(
        <li className="border border-gray-200 px-6 rounded">
            <section className="flex items-center gap-x-4 pt-6 pb-4 border-b border-gray-200/60">
                <img src={logo_path} alt={title} className="rounded-lg w-10 h-10 border border-gray-400/40" />
                <h3 className="font-semibold text-sm md:text-base lg:text-base text-gray-800">{title}</h3>
            </section>

            <section className="flex justify-between pt-4 pb-2 items-center">
                <time className="text-xs text-gray-800">{date}</time>
                <h4 className="border border-gray-200 rounded-md text-xs px-2 py-1">{type}</h4>
            </section>

            <section className="pt-1 pb-4">
                <h5 className="line-clamp-4 text-xs md:text-sm lg:text-sm text-justify text-gray-600"> {abstract} </h5>
            </section>

            <ul className="flex flex-wrap gap-1 pb-4">
                {tools.map((tool) => (
                  <li key={tool} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{tool}</li>
                ))}
            </ul>

            <section className="flex gap-x-2 items-center pb-6">
                
                <NavLink to={demo_link} className="flex-1 bg-gray-800 text-gray-200 py-2 px-4 rounded border border-gray-800 text-xs md:text-sm lg:text-sm flex justify-center items-center gap-x-2 hover:bg-gray-800/80 hover:text-gray-100">
                    <span>view project</span>
                    <ArrowLongRightIcon className="w-4" />
                </NavLink>
                
                <a href={github_link} target="_blank" rel="noreferrer" className="border border-gray-400/40 rounded px-4 py-2 flex gap-x-2 items-center text-xs md:text-sm lg:text-sm text-gray-800 cursor-pointer hover:bg-gray-100 hover:border-gray-400/20">
                    <SiGithub className="w-4 h-4"/>
                    <span>GitHub</span>
                </a>
            </section>
        </li>
    );

}

export default ProjectItem;