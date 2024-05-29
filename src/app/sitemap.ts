import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = process.env.BASE_URL as string;
    return [
        {
            url: BASE_URL + "/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: BASE_URL + "/shops",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: BASE_URL + "/shops/takadanobaba-main",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: BASE_URL + "/shops/ikebukuro",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: BASE_URL + "/shops/koenji",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
    ];
}
