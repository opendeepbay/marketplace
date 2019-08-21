module.exports = {
  runtimeCompiler: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    cate_watch: {
      entry: 'src/categories.js',
      template: 'public/categories/cmt.html',
      filename: 'categories/cmt.html'
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/"
};
