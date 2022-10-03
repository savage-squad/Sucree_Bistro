const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
module.exports = withPlugins([], {});
module.exports = withImages();

module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }