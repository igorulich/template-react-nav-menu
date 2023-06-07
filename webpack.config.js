export const module = {
  devServer: {
    contentBase: './public',
    port: 9000
  },
  rules: [
    {
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