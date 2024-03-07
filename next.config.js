/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.modules.push(__dirname);
      }
  
      return config;
    },
   
  };
  
