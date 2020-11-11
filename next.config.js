const alias = require('./config/alias')

module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },

  webpack: (config) => {
    config.resolve = {
      alias: { ...(config.resolve.alias || {}), ...alias },
    }

    config.module.rules.push({
      test: /\.(png|jpg|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    })

    return config
  },
}
