const path = require('path');

export const module = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "public"),
  
  },
  devServer: {
    port: 9000,  
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
  rules: [{
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          implementation: require("sass"),
          sassOptions: {
            fiber: false,
          },
        },
      },
    ],
  },

  ],
};