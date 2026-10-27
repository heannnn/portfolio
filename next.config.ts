import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // D:\yarn.lock 때문에 워크스페이스 루트가 D:\로 잡히지 않도록 고정
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
