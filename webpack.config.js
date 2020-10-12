const path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
var nodeExternals = require('webpack-node-externals');
//nunca olvides de colocar target node en webpack
//node externals pior el error de aws-sdk 
module.exports ={
    entry: './src/index.ts',
    target:'node',
    externals: [nodeExternals(),{ knex: 'commonjs knex' }],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: [ ".mjs",'.js', '.ts','.(graphql|gql)'],
      modules: [
          
          'src',
      ]
  },
    module:{
        rules:[
          {
              test: /\.(graphql|gql)$/,
              exclude: /node_modules/,
              loader: 'graphql-tag/loader'
          },
          {
              test: /\.ts$/,
              exclude: /node_modules/,
              loaders: 'awesome-typescript-loader'
          }
        ]
    },
    plugins:[
      new CheckerPlugin(),
    ]
    
  };
