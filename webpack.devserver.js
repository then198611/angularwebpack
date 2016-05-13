var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var spawn = require('child_process').spawn;
var host = '0.0.0.0';
var port = 80;
var file = config.entry;
config.entry = [
    file.main,
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://' + host + ':' + port
];
var server = new WebpackDevServer(webpack(config), {
    contentBase: '/dist/',
    hot: true,
    quiet: false,
    noInfo: false,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    stats: {
        colors: true
    },
    proxy: {
        '/api/**': {
            target: 'http://crm.dev.tigerwit.com',
            secure: false,
            changeOrigin: true
        }
        // '/api/**': 'http://crm.dev.tigerwit.com'
    }
});

//server.listen(80, "192.168.10.16", function() {});
server.listen(port, host, function() {
    console.log('listening ', host, ':', port);
    spawn('open', ['http://c.tigerwit.com/#/customer/']);
});
