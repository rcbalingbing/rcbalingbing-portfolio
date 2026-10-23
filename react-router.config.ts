import type { Config } from "@react-router/dev/config";

export default {
  
  ssr: false,

  // # URLs to generate as static html
  prerender: [
    "/",
  ]
  
} satisfies Config;
