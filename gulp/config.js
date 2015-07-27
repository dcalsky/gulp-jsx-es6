var dest = './build';
var src = './src';

module.exports = {
    browserSync: {
        server: {
            baseDir: [dest]
            // We haven't used sass
            // We're serving the src folder as well
            // for sass sourcemap linking
            // baseDir: [dest, src]
        },
        files: [
            dest + '/**'
        ]
    },
    css: {
        src: src + "/css/**",
        dest: dest
    },
    markup: {
        src: src + "/www/**",
        dest: dest
    },
    browserify: {
        // Enable source maps
        debug: true,
        extensions: ['.jsx'],
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/app/app.jsx',
            dest: dest,
            outputName: 'app.js'
        }]
    }
};
