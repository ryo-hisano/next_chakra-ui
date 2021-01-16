module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/1': { page: '/1' },
      '/2': { page: '/2' },
      '/3': { page: '/3' },
      '/4': { page: '/4' },
    }
  },
  //trailingSlash: true,
}
