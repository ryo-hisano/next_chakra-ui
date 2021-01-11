const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://nontan-next-chakra.vercel.app/',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public',
  ignoredExtensions: ['js', 'map'],
  ignoredPaths: ['[fallback]'],
  nextConfigPath: __dirname + '/next.config.js',
})
