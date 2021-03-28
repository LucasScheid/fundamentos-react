const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    // app.use(
    //     proxy("/users", {
    //         target: "https://jsonplaceholder.typicode.com",
    //         secure: false,
    //         changeOrigin: true
    //     })
    // );

    app.use(
        proxy("/operacoes/v1/usuario/obteremail", {
            target: "https://apiqa.leomadeiras.com.br",
            secure: false,
            changeOrigin: true
        })
    );
};
