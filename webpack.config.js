const path = require('path')
const { dirname } = require('path/posix')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    }
}