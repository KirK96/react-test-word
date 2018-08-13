const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const __DEV__ = process.env.NODE_ENV !== 'production';
const root = process.cwd();

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const WEBPACK_SPRITES_PATH = 'src/assets/images/themes';
const DEV_WEBPACK_HOST = 'localhost';
const DEV_WEBPACK_PORT = '3000';
const DEBUG = JSON.stringify(process.env.DEBUG === 'true');

/** @type {webpack.Configuration} */
const config = {
  // devtool: 'soorse-map',
  mode: __DEV__ ? 'development' : 'production',
  bail: !__DEV__,
  watch: true,

  entry: {
    app: path.join(root, 'src/init.tsx'),
    sprites: glob.sync(path.join(WEBPACK_SPRITES_PATH, '*.png')),
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: __DEV__ ? 'assets/[name]-[hash:8].js' : 'assets/[name].js',
    chunkFilename: 'assets/[name]-[chunkhash].chunk.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    modules: [root, path.resolve(root, 'src'), 'node_modules'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tester',
      favicon: 'src/assets/images/themes/feel.png',
      meta: { viewport: 'width=device-width, initial-scale=1', 'theme-color': '#50A388' },
    }),
    new MiniCssExtractPlugin({ filename: __DEV__ ? '[name]-[hash:8].css' : '[name].css' }),
    new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru/),
    new HardSourceWebpackPlugin(),
    new webpack.DefinePlugin({ DEBUG }),
  ],

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(jsx)|(tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              cacheDirectory: true,
            },
          },
          'ts-loader?transpileOnly=true',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/,
        exclude: path.resolve(__dirname, WEBPACK_SPRITES_PATH),
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: __DEV__ ? 'assets/media/[name]-[hash:8].[ext]' : 'assets/media/[name].[ext]',
          },
        },
      },
      {
        test: /\.png$/,
        include: path.resolve(__dirname, WEBPACK_SPRITES_PATH),
        use: {
          loader: 'file-loader',
          options: {
            limit: 8000,
            outputPath: 'assets/images/themes',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          `css-loader?minimize=${!__DEV__}`,
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  optimization: {
    minimizer: [
      new ParallelUglifyPlugin({
        cacheDir: path.join(__dirname, 'node_modules', '.cache', 'parallel-uglify'),
        uglifyJS: {
          mangle: false,
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/].*\.(jsx?|tsx?)/,
          name: 'vendor',
          chunks: 'all',
        },
        styles: {
          test: /\.(less|css)$/,
          name: 'styles',
          chunks: 'all',
        },
      },
    },
  },
};


if (__DEV__) {
  config.devServer = {
    port: DEV_WEBPACK_PORT,
    host: DEV_WEBPACK_HOST,
    contentBase: `${__dirname}/public`,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      cached: true,
      colors: true,
      errorDetails: false,
      errors: true,
      hash: false,
      modules: false,
      publicPath: false,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: true,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  };
  config.output.publicPath = '/';
  config.plugins.unshift(new webpack.NamedModulesPlugin());
  config.plugins.push(new ForkTsCheckerWebpackPlugin({
    tslint: './tslint.json',
    eslint: './eslintrc.json',
  }));
  // config.devtool = 'source-map';
} else {
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
  );
}

module.exports = config;
