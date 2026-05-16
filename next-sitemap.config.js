/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://bio-ivory-mu.vercel.app',

  generateRobotsTxt: true,

  generateIndexSitemap: true,

  changefreq: 'weekly',

  priority: 0.7,

  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}