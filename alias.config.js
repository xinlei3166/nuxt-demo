const resolve = dir => require('path').join(__dirname, dir);
console.log(resolve('.'))
module.exports = {
  resolve: {
    alias: {
      '@': resolve('.')
    }
  }
};
