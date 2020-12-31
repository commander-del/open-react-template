var path = require("path");

module.exports = {
    resolve: {
        modules: [
            path.join(__dirname, "js/helpers"),
            "node_modules"
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        jquery: 'jQuery'
    }
};