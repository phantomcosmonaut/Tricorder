const path = require("path");

module.exports = {
    mode: "development",
    watch: true,
    watchOptions: {
      poll: 1000,
    },
    entry: "./game/config.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/static"),
    },
    resolve: {
      modules: ["game", "game/scenes", "node_modules"],
      extensions : ['.png', '.js', '.ts']
    },
    module: {
      rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: "ts-loader",
            include: [path.resolve(__dirname, "game")]
          },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(gif|png|jpe?g|svg|xml)$/i,
          use: "file-loader"
        },
        {
          test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
      ]
    },
}
