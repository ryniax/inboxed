module.exports = {
  devServer: {
    progress: false,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },
};
