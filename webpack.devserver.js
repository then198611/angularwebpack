var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var spawn = require('child_process').spawn;
var host = '0.0.0.0';
var port = 8080;
var file = config.entry;
config.entry = [
    file,
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://' + host + ':' + port
];
var server = new WebpackDevServer(webpack(config), {
    contentBase: '/dist/',
    hot: true,
    quiet: false,
    noInfo: false,
    headers: {"Access-Control-Allow-Origin": "*"},
    stats: { colors: true },
    proxy: {
        '/api/*': 'http://127.0.0.1:9002'
    }
});

//server.listen(80, "192.168.10.16", function() {});
server.listen(port, host, function() {
    console.log('listening 0.0.0.0:8080');
    spawn('open', ['http://127.0.0.1:8080/']);
});
