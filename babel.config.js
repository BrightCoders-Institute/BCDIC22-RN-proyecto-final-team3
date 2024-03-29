module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', ['@babel/preset-typescript', { allowDeclareFields: true }]],
    plugins: ['transform-inline-environment-variables'],
  };
};
