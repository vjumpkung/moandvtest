import { NextPageContext } from "next";

const blogPostsXml = () => {
  let postsXml = "";
  return {
    postsXml
  };
};
const sitemapXml = () => {
  const {postsXml} = blogPostsXml();
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://moandv.com/</loc>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://moandv.com/about</loc>
      <priority>0.8</priority>
    </url>
    ${postsXml}
  </urlset>`;
};

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res }: NextPageContext) => {
  
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXml());
  res.end();
};
export default Sitemap
