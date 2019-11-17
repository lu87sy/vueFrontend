const mockIndexData = require("./public/mock/index.json");
module.exports = {
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    },
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^api': './public/mock'
        //         }
        //     }
        // }
        port: 8080,
        before(app) {
            app.get("/api/index", (req, res) => {
                res.json(mockIndexData);
            });
        }
    }
}