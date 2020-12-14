const { resolve } = require('path');
const { getIfUtils } = require('webpack-config-utils');

module.exports = env => {
    const { ifProduction, ifNotProduction } = getIfUtils(env);
    const config = {
        context: resolve("src"),
        entry: ["./index.tsx"],
        output: {
            filename: "bundle.js",
            path: resolve("dist"),
            publicPath: "/dist/",
            pathinfo: ifNotProduction(),
        },
        devtool: ifProduction("source-map", "eval"),
        resolve: {

            /*
            * An array of extensions that should be used to resolve modules.
            * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
            */
            extensions: ['.ts', '.tsx', '.js', '.json'],

            // An array of directory names to be resolved to the current directory
            modules: [resolve("src"), 'node_modules'],

        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    loaders: [
                        'awesome-typescript-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    loader: "source-map-loader" 
                },
            ],

        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
    };
  if (env.debug) {
    console.log(config);
    debugger;
  }

  return config;
}