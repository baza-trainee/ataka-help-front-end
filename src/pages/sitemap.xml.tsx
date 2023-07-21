import { GetServerSideProps } from "next";

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = "https://ataka-help.tech";

  const staticPaths = [
    `${BASE_URL}/`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contacts`,
    `${BASE_URL}/useful-information/1`,
    `${BASE_URL}/useful-information/2`,
    `${BASE_URL}/useful-information/3`,
    `${BASE_URL}/useful-information/4`,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPaths
      .map(
        url =>
          `<url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`,
      )
      .join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
