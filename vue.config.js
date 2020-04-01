const path = require('path');

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';
module.exports = {
    // 部署应用包的基本路径URL
    publicPath: BASE_URL,
    // 输入文件目录
    outputDir: 'dist',
    // 放置生成的静态资源目录(js/css/img/fonts)
    assetsDir: 'assets',
    // 生成的静态资源文件名包含了hash控制缓存
    filenameHashing: true,
    // 在保存的时候使用'eslint-loader'进行检查
    lintOnSave: true,
    // 生产环境是否需要source map
    productionSourceMap: false,
    // 对webpack做更细粒度的控制
    chainWebpack: (config) => {
        // loader修改
        config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => options);
        // 插件修改
        config.plugin('fork-ts-checker').tap(([options]) => {
            return [{
                async: false,
                tslint: false,
                vue: false
            }]
        })
        // 开发环境配置修改
        config.when(process.env.NODE_ENV === 'development', config => {
            return config.devtool('cheap-source-map')
        });
        // 生产环境配置修改
        config.when(process.env.NODE_ENV === 'development', config => {
            config.optimization.splitChunks({
                chunks: 'all',
                minSize: 0,
                maxSize: 0,
                name: true,
                cacheGroups: {
                    // 分割出第三方依赖
                    libs: {
                        name: 'chunk-libs',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10, // 模块可以属于10个缓存组
                        chunks: 'initial'
                    },
                    elementUI: {
                        name: 'chunk-elementUI',
                        priority: 20,
                        test: /[\\/]node_modules[\\/]_?element-ui(.*)/
                    },
                    commons: {
                        name: 'chunk-commons',
                        test: path.resolve(__dirname, 'src/components'),
                        priority: 5,
                        minChunks: 3,
                        reuseExistingChunk: true // 如果当前块包含已从主捆绑包中拆分出的模块，则将重用该模块，而不是生成新的模块
                    }
                }
            });
            config.optimization.runtimeChunk('single');
        })
    },
    // 开发环境配置修改
    devServer: {
        open: true,
        port: 9090,
        //compress: true,
        //noInfo: true,
        overlay: {
            warning: true,
            errors: true
        },
        // 除去控制台日志
        clientLogLevel: 'none',
        /*proxy: {
            '/api': {
                target: '',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }*/
    },
    // 构建时多核启动
    parallel: require('os').cpus().length > 1
};