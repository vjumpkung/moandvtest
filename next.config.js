module.exports = {
    exportPathMap: async function (
    ) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/404': { page: '/404' },
      }
    },
  }