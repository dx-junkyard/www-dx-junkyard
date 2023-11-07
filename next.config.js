module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      fs: "fs",
      path: "path",
    });
    return config;
  },
};
