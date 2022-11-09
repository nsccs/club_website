const path = require('path');

const SRC_FILE = path.resolve(__dirname,'src', 'index.js');
const OUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: SRC_FILE,
  output: {
    path: OUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
 }
};
