export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://landing-tastycorner.vercel.app/sitemap.xml",
    host: "https://landing-tastycorner.vercel.app",
  };
}
