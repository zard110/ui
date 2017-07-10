const path = require('path')

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  tasks: 'gulp',
  root: path.join(__dirname, '..')
}
exports.path = {}
for (const pathName of Object.keys(exports.paths)) {
  const basePath = exports.paths[pathName]
  exports.path[pathName] = function joinPath(...paths) {
    return path.join(...[basePath].concat(paths))
  }
}

exports.files = {
  lint: [
    // source目录下所有js文件
    exports.path.src('**/*.js'),

    // 排除测试文件
    exports.path.src('**/!(*.spec).js'),

    // gulp所有task文件
    exports.path.tasks('*.js'),

    // gulpfile
    exports.path.root('gulpfile.js'),
  ],

  srcJs: [
    exports.path.src('**/!(*.spec).js')
  ]
}

