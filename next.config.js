module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/1': { page: '/1' },
      //'/404': { page: '/404' },
    }
  },
  trailingSlash: true,
  //errorPages: '',
  //errorPagesUseHtml: false,
  //basePath: '/next',
  //assetPrefix: '/next',
}
