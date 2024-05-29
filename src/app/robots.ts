import { MetadataRoute } from "next";

const url = "https://mobile-repair-center.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/api/",
        },
        sitemap: `https:/${url}/sitemap.xml`,
    };
}
