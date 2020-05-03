const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 0.2%']
        }
      }
    ]
  ]
};

module.exports = babelConfig;