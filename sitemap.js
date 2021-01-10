const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://test.jp',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'out',
  ignoredExtensions: ['js', 'map'],
  ignoredPaths: ['[fallback]'],
  nextConfigPath: __dirname + '/next.config.js',
})
