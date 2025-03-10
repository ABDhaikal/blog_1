import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: `seemlyzinc-us.backendless.app`,
         },
      ],
   },
};

export default nextConfig;
