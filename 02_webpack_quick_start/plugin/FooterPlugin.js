const {ConcatSource} = require('webpack-sources');

class FooterPlugin {
    constructor(options) {
        console.log('FooterPlugin1', options);
        this.options = options;
    }

    apply(compiler) {
        console.log('FooterPlugin2', typeof compiler);
        compiler.hooks.compilation.tap('FooterPlugin', compilation => {
            compilation.hooks.processAssets.tap('FooterPlugin', compilation => {
                const chunks = compilation.chunks;
                // console.log('xxxxxxx',chunks);
                for (const chunk of compilation.chunks) {
                    for (const file of chunk.files) {
                        console.log('file', file);
                        const comment = `/* ${this.options.banner} */`;
                        // update file by webpack-sources
                        compilation.updateAsset(file, old => new ConcatSource(old, '\n', comment))
                    }
                }
            })
        })
    }
}

module.exports = FooterPlugin