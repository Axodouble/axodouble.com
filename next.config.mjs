/** @type {import('next').NextConfig} */
import { configDotenv } from 'dotenv';

configDotenv();

const nextConfig = {
    assetPrefix: process.env.PROXY ? process.env.PROXY : undefined,
};

export default nextConfig;
