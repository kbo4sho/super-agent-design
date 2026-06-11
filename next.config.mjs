import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_PAGES_REPO ?? "super-agent-design";
const repoBasePath = `/${repoName}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "192.168.68.64"],
  assetPrefix: isGitHubPages ? repoBasePath : undefined,
  basePath: isGitHubPages ? repoBasePath : undefined,
  images: {
    unoptimized: true,
  },
  output: isGitHubPages ? "export" : undefined,
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
};

export default nextConfig;
