import type { NextConfig } from "next";

const redirects = [
  ["/pursuing-a-better-tomorrow", "/books/pursuing-a-better-tomorrow"],
  ["/en-busca-de-de-un-manana-mejor", "/books/en-busca-de-un-manana-mejor"],
  ["/en-busca-de-un-manana-mejor", "/books/en-busca-de-un-manana-mejor"],
  ["/a-holistic-approach-to-your-career", "/books/a-holistic-approach-to-your-career"],
  ["/empower-yourself-for-an-amazing-career", "/books/empower-yourself-for-an-amazing-career"],
  ["/unspoken-words-of-love", "/books/unspoken-words-of-love"],
  ["/your-power-within", "/books/your-power-within"],
  ["/el-poder-dentro-de-ti", "/books/el-poder-dentro-de-ti"],
  ["/betrayal", "/books/betrayal"],
  ["/la-traicion", "/books/la-traicion"],
  ["/broken-vows-a-blessing-in-disguise", "/books/broken-vows-a-blessing-in-disguise"],
  ["/votos-rotos-una-bendicion-disfrazada", "/books/votos-rotos-una-bendicion-disfrazada"],
  ["/home", "/"],
  ["/new-release", "/books"],
  ["/international-book-store", "/books"],
  ["/store", "/books"],
  ["/video", "/events"],
  ["/pursuing-a-better-tomorrow-2", "/books/pursuing-a-better-tomorrow"],
  ["/pursuing-a-better-tomorrow-3", "/books/pursuing-a-better-tomorrow"],
  ["/about-the-author", "/about"],
  ["/the-journey-begins", "/blog"],
  ["/personal-empowerment-why-it-matters-2", "/blog/personal-empowerment-why-it-matters"],
  ["/out-of-many-one-2", "/blog/out-of-many-one"],
  ["/creating-a-better-tomorrow", "/blog/out-of-many-one"],
  ["/hispanic-heritage-month-2019-book-promotion", "/blog/hispanic-heritage-2019"],
  ["/editorial-review-by-isabel-montes-ramirez-angels-fortune-editions-pursuing-a-better-tomorrow-en-busca-de-un-manana-mejor", "/blog/editorial-review-pursuing-a-better-tomorrow"],
  ["/press-release-pursuing-a-better-torrow", "/books/pursuing-a-better-tomorrow"],
  ["/top-10-requirements-for-a-successful-career-taking-a-holistic-approach", "/blog/top-10-requirements-for-a-successful-career"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return redirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
