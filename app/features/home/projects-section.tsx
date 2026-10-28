
import PROJECTS, { PROJECT_CATEGORIES } from "~/data/projects";
import ProjectList from "~/components/projects/project-list";
import ProjectItem from "~/components/projects/project-item";
import { useCategoryFilter } from "~/hooks/use-category-filter";

const ProjectsSection = () => {

    const [category, setCategory] = useCategoryFilter();

    const visible_project = PROJECTS.filter((project) => project.categories.includes(category));

    return (
        <>
            <div className="flex flex-wrap gap-2 pt-4">
                {PROJECT_CATEGORIES.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => setCategory(filter)}
                        aria-pressed={category === filter}
                        className={`rounded-md border px-3 py-1 text-xs capitalize cursor-pointer ${
                            category === filter ? "border-gray-800 bg-gray-800 text-gray-200" : "border-gray-400/40 text-gray-800 hover:bg-gray-100"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <ProjectList>
                {visible_project.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </ProjectList>

            {visible_project.length === 0 && (
                <p className="pt-4 text-sm text-gray-600">No projects in this category yet.</p>
            )}
        </>
    );
};

export default ProjectsSection;