/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.modules.push(__dirname);
      }
  
      return config;
    },
    env: {
      // @see https://github.com/facebookexperimental/Recoil/issues/2135#issuecomment-1362197710
          RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: "false",
        }
   
  };
  
