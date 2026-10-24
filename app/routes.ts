import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [

    layout("layouts/main-layout.tsx", [
        index("features/home/home.tsx"),
    ])

] satisfies RouteConfig;
