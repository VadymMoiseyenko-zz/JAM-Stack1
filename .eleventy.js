module.exports = function (config) {

  config.setBrowserSyncConfig({
    https:{
      key: '/etc/ssl/localhost/localhost.key',
      cert: '/etc/ssl/localhost/localhost.crt',
    }
  })

  config.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
