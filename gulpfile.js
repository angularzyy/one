var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    mincss = require('gulp-minify-css');

gulp.task('uglify',function(){
     gulp.src(["js/*.js"])
         .pipe(concat('main.js'))//合并引入
         .pipe(rename({'suffix':'.min'}))//更改后缀名
         .pipe(uglify())//调用方法
         .pipe(gulp.dest('js/'))
    })
gulp.task('mincss',function(){
     gulp.src(['css/*.css'])
         .pipe(concat('main.css'))
         .pipe(rename({"suffix":'.min'}))
         .pipe(mincss())
         .pipe(gulp.dest('css/'))
    })


