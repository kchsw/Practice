const gulp = require('gulp');
const babel = require('gulp-babel'); // 语法转换
const concat = require('gulp-concat'); // 合并
const uglify = require('gulp-uglify'); // js压缩
const sass = require('gulp-sass') // scc编译
const htmlmin = require('gulp-htmlmin'); //html压缩
const watch = require('gulp-watch');// 监听文件
const connect = require('gulp-connect'); // 服务
const imagemin = require('gulp-imagemin') // 图片压缩
const del = require('del') // 清空目录
const minifyCSS = require('gulp-minify-css') //css压缩

// es6语法转换 js压缩 md5命名
gulp.task('js', async() => {
  await  gulp.src('./src/js/*.js')
          .pipe(babel({
            presets: ['@babel/env']
          }))
          .pipe(uglify())
          .pipe(gulp.dest('./dist/js'))
          .pipe(connect.reload())
});
// scss编译成css
gulp.task("scss", async () => {
  await gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
});
// scc合并压缩
gulp.task("css", async() => {
  await gulp.src(['./src/css/index.css', './src/css/base.css'])
            .pipe(concat('index.css'))
            .pipe(minifyCSS({keepBreaks:true}))
            .pipe(gulp.dest('./dist/css'))
            .pipe(connect.reload())
})

// 压缩图片
gulp.task('img', async () => {
  await gulp.src('./src/img/*')
          .pipe(imagemin())
          .pipe(gulp.dest('./dist/img'))
})
// html压缩
gulp.task('html', async() => {
  await gulp.src('./src/index.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist/'))
            .pipe(connect.reload())
    
});

gulp.task('clean', async() => {
  await del(['dist/*']);
})

//服务
gulp.task('connect', function () {
  connect.server({
      root: "src",
      port: 8080,
      livereload: true,
  });
});
//监视文件， 自动执行
gulp.task('myWatch', function(){
  gulp.watch('./src/scss/*.scss', gulp.series('scss'))
  gulp.watch('./src/css/*.css', gulp.series('css'))
  gulp.watch('./src/js/*.js', gulp.series('js'))
  gulp.watch('./src/index.html', gulp.series('html'))
  gulp.watch('./src/img/*', gulp.series('img'))
})
//启动开发环境 gulp.series是顺序执行 gulp.parallel是同步执行
gulp.task('start', gulp.series(gulp.parallel('myWatch', 'connect')));
// 构建项目 
gulp.task('dist',gulp.series('clean',gulp.parallel('html','scss', 'css', 'js', 'img')));
