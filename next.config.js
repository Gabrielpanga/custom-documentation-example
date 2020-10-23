module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: true,
      },
    ]
  },
  env: {
    README_BASE_URL: process.env.README_BASE_URL,
  },
}