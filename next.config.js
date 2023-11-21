
module.exports = {
    // Your existing Next.js configuration goes here
    // ...
  
    webpack: (config, { isServer }) => {
      // Define the modularizeImports transformation rules
      const modularizeImports = {
        "@mui/material/?(((\\w*)?/?)*)": {
          transform: "@mui/material/{{ matches.[1] }}/{{member}}",
        },
        "@mui/icons-material/?(((\\w*)?/?)*)": {
          transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
        },
      };
  
      // Apply the modularizeImports transformation only on the server side
      if (isServer) {
        const rule = config.module.rules.find((rule) => rule.oneOf);
        const babelLoader = rule.oneOf.find(
          (loader) => loader.use && loader.use.loader === 'next-babel-loader'
        );
  
        if (babelLoader) {
          // Add the modularizeImports plugin with the defined rules
          babelLoader.use.options.plugins.push([
            require.resolve('babel-plugin-modular-imports'),
            { modularizeImports },
          ]);
        }
      }
  
      return config;
    },
  };