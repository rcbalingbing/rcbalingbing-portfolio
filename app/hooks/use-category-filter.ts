
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

import { PROJECT_CATEGORIES, type ProjectCategory } from "~/data/projects";

// # url query parameter for the selected project category
const CATEGORY_PARAM = "category";

// # default category when the url parameter is mising or invalid
const DEFAULT_CATEGORY: ProjectCategory = "featured";

// # checks if the url parameter is a valid project category since the userr can input anything on the url
const isValidProjectCategory = (value: string | null): value is ProjectCategory =>
    value !== null && (PROJECT_CATEGORIES as readonly string[]).includes(value);

// # custom hook for managing the selected project category through url parameters
export function useCategoryFilter(): readonly [ ProjectCategory, (category: ProjectCategory) => void, ] {
    const [search_params, setSearchParams] = useSearchParams();

    // # retrieve the selected category from the url or use the default category
    const raw = search_params.get(CATEGORY_PARAM);
    const selected = isValidProjectCategory(raw) ? raw : DEFAULT_CATEGORY;

    // # memoize the function to prevent unnecessary recreation during rerenders
    const setCategory = useCallback((category: ProjectCategory) => {

            // # update the category parameter while preserving other existing url parameters
            setSearchParams(
                (prev) => {
                    // # create a copy of the existing url parameters
                    const next = new URLSearchParams(prev);
                    
                    // # remove the category parameter when the default category is selected
                    if(category === DEFAULT_CATEGORY) {
                        next.delete(CATEGORY_PARAM);
                    }
                    
                    // # update the url parameter with the selected category
                    else {
                        next.set(CATEGORY_PARAM, category);
                    }

                    return next;
                },
                {
                    preventScrollReset: true, // # prevent the page from scrolling to the top when changing categories
                    replace: true, // # replace the current history entry instead of creating a new one
                }
            );
        },
        [setSearchParams]
    );

    // # preserve the tuple reference unless the selected category or setter changes
    return useMemo(() => [selected, setCategory] as const, [selected, setCategory]);
}