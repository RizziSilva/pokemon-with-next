module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
}
