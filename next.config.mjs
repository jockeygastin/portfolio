/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        turbo:{
            resolveExtensions: [
                ".ts",
                ".tsx",
                ".js",
                ".jsx",
                ".md",
                ".mdx",
                ".pdf"
            ]
        }
    }
};

export default nextConfig;
