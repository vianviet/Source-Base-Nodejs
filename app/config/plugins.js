module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        xxlarge: 10000,
        // xlarge: 1920,
        // large: 1000,
        // medium: 750,
        // small: 500,
        // xsmall: 64,
      },
      providerOptions: {
        localServer: {
          maxage: 30000000,
        },
      },
      sizeLimit: 3000 * 1024 * 1024, // 256mb in bytes
    },
  },
});
