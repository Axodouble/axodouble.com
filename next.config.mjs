/** @type {import('next').NextConfig} */
import { configDotenv } from 'dotenv';

configDotenv();

const nextConfig = {
    // Use the CDN in production and localhost for development.
    assetPrefix: process.env.PROXY ? process.env.PROXY : undefined,
};

export default nextConfig;
