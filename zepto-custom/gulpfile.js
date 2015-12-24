var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var fs = require('fs');

//定义需要合并的模块
var aZeptoModule = [
  'src/zepto.js', //核心模块，包含大部分方法
  '!src/event.js', //通过 on() & off() 处理事件
  '!src/ajax.js', //XXMLHttpRequest 和 JSONP 实用功能
  '!src/form.js', //序列化 & 提交 web 表单
  '!src/ie.js', //IE 10+ PC版 和 Windows Phone 8 的支持
  '!src/detect.js', //提供 $.os和 $.browser 方法
  '!src/fx.js', //animate()方法
  '!src/fx_methods.js', //show, hide, toggle, 和 fade*()方法
  '!src/assets.js', //实验性支持从DOM中移除image元素后清理iOS的内存。
  '!src/data.js', //一个全面的 data()方法, 能够在内存中存储任意对象
  /**
   * 提供 $.Deferredpromises API，使 $.ajax() 支持promise接口链式的回调。
   * 依赖"callbacks" 模块
   */
  '!src/deferred.js',
  '!src/callbacks.js',
  '!src/selector.js', //实验性的支持 jQuery CSS 表达式，比如 $('div:first')和 el.is(':visible')。
  '!src/touch.js', //在触摸设备上触发tap– 和 swipe– 相关事件。这适用于所有的`touch`(iOS, Android)和`pointer`事件(Windows Phone)。
  '!src/gesture.js', //在触摸设备上触发 pinch 手势事件。
  '!src/stack.js', //提供 andSelf& end()链式调用方法
  '!src/ios3.js' //String.prototype.trim 和 Array.prototype.reduce 方法 (如果他们不存在) ，以兼容 iOS 3.x.
];

//过滤不需要合并的模块并传入pkg
var pkg = JSON.parse(fs.readFileSync('package.json'));
pkg.module = '';
// pkg.date = JSON.parse(Date());
pkg.date = new Date().toISOString();
aZeptoModule.forEach(function(ele) {
    if(!/^!/.test(ele)) {
        pkg.module += ele.replace('src/', '').replace('.js', '; ');
    }
});

//添加注释格式
function addComment () {
    var template = ['/**',
        ' *! <%= pkg.name %> - <%= pkg.description %>',
        ' * @author <%= pkg.author %>',
        ' * @github <%= pkg.link %>',
        ' * @include <%= pkg.module %>',
        ' * @date <%= pkg.date %>',
        ' */',
        ''
    ].join('\n');
    return plugin.header(template, {
        pkg: pkg
    });
}

//清理文件
gulp.task('cleanDist', function(cb){
    gulp.src(['dist/'])
        .pipe(plugin.clean());
    cb();
});
gulp.task('cleanSrc', function(cb){
    gulp.src(['src/'])
        .pipe(plugin.clean());
    cb();
});

//更新文件
gulp.task('update', ['cleanSrc'], function() {
    var baseZeptoPath = "https://raw.githubusercontent.com/madrobby/zepto/master/";
    var aDownloadFile = [];
    for(i in aZeptoModule) {
        aDownloadFile[i] = baseZeptoPath + aZeptoModule[i].replace('!', '');
    }
    plugin.download(aDownloadFile).pipe(gulp.dest('src/'));
});

//模块合并压缩
gulp.task('build', ['cleanDist'], function() {
    gulp.src(aZeptoModule)
    //合并文件并输出
    .pipe(plugin.concat('zepto.js'))
    .pipe(addComment())
    .pipe(gulp.dest('dist/'))
    //重合名文件并压缩输出
    .pipe(plugin.rename('zepto.min.js'))
    //不过滤版权注释
    .pipe(plugin.uglify({'preserveComments':'license'}))
    .pipe(gulp.dest('dist/'));
});