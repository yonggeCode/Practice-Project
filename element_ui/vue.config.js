module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@Element': '@/views/Element',
        '@until':'@/until'
      },
    },
  },
};
