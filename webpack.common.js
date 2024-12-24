const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    tea: "./src/tea.js",
    meet: "./src/meet.js",
    recipe: "./src/recipe.js",
    article: "./src/article.js",
    styleguide: "./SafiaProj/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        test: /\.png/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.svg/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),

    // Index
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),

    // About
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "./about.html",
      chunks: ["index"],
    }),
    // About
    new HtmlWebpackPlugin({
      template: "./src/tea.html",
      filename: "./tea.html",
      chunks: ["tea"],
    }),
    // Meet
    new HtmlWebpackPlugin({
      template: "./src/meet.html",
      filename: "./meet.html",
      chunks: ["meet"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/recipe.html",
      filename: "./recipe.html",
      chunks: ["recipe"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/article.html",
      filename: "./article.html",
      chunks: ["article"],
    }),

    new HtmlWebpackPlugin({
      template: "./SafiaProj/styleguide.html",
      filename: "./styleguide.html",
      chunks: ["styleguide"],
    }),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ])
  ],
  optimization: {
    // minimizer: [new CssMinimizerPlugin()]
  },
};
