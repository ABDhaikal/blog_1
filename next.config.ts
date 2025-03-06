import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: `${process.env.BASE_APP_URL}`,
         },
      ],
   },
};

export default nextConfig;
