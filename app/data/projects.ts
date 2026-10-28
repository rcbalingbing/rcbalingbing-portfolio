export const PROJECT_TYPES = ["mobile-app", "web-app", "ai", "machine-learning"] as const;

export const PROJECT_CATEGORIES = ["featured", "personal", "contributed", "open-sourced", "enterprise"] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
    logo_path?: string;
    title: string;
    date: string;
    type: ProjectType;
    categories: ProjectCategory[];
    abstract: string;
    tools: string[];
    demo_link: string;
    github_link: string;
};

const PROJECTS: Project[] = [
    {
        logo_path: "/logo/albayreality-logo.png",
        title: "AlbayReality",
        date: "2025-2026",
        type: "mobile-app",
        categories: ["featured", "contributed"],
        abstract: "Albay Reality is an Android AR app that promotes and preserves Albay, Philippines' cultural heritage. Explore 3D models of heritage landmarks, curated historical info, gamified trivia, and an interactive map of cultural sites.",
        tools: ["Kotlin", "Firebase", "AR Core", "3D Models"],
        demo_link: "/",
        github_link: "https://github.com/rcbalingbing/AlbayReality",
    },
    {
        logo_path: "/logo/bettermalinao-logo.png",
        title: "BetterMalinao",
        date: "2026",
        type: "web-app",
        categories: ["featured", "open-sourced"],
        abstract: "An open-source, community-driven initiative inspired by BetterGov.ph, building accessible digital tools to promote transparency, and citizen participation.",
        tools: ["React", "TypeScript"],
        demo_link: "bettermalinao.vercel.app",
        github_link: "https://github.com/bettermalinao/bettermalinao",
    },
    {
        logo_path: "/logo/placeholder-logo.png",
        title: "Single Layer Perceptron in C",
        date: "2026",
        type: "machine-learning",
        categories: ["featured", "personal"],
        abstract:
            "A single-layer perceptron built from scratch in C to classify the Iris dataset. It includes a custom training loop with forward/backward propagation, cross-entropy loss, SGD, and a train/test split.",
        tools: ["C", "Makefile", "CSV", "Iris-dataset"],
        demo_link: "/",
        github_link: "https://github.com/rcbalingbing/single-layer-perceptron-c",
    },
    {
        logo_path: "/logo/placeholder-logo.png",
        title: "Clustering and Classification",
        date: "2026",
        type: "machine-learning",
        categories: ["featured", "contributed"],
        abstract: "Data mining project using R for classification and clustering analysis. Uses rpart decision trees for classification and K-Means, PAM, and Gower Distance for clustering user engagement and demographic data from the Albay Reality AR-based cultural heritage application.",
        tools: ["R", "R-Studio", "R-part", "K-means"],
        demo_link: "/",
        github_link: "https://github.com/rcbalingbing/Clustering-and-Classfication-R",
    }
];

export default PROJECTS;