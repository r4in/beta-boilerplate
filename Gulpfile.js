"use strict";
var browserify = require("browserify"),
  gulp = require("gulp"),
  sass = require("gulp-sass"),
  sassGlob = require("gulp-sass-glob"),
  sourcemaps = require("gulp-sourcemaps"),
  autoprefixer = require("gulp-autoprefixer"),
  source = require("vinyl-source-stream"),
  buffer = require("vinyl-buffer"),
  newer = require("gulp-newer"),
  imagemin = require("gulp-imagemin"),
  browserSync = require("browser-sync").create(),
  reload = browserSync.reload,
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  watch = require("gulp-watch");

var imgSrc = "assets/images/originals/*";
var imgDest = "assets/images/";

var onError = function(err) {
  if (err.code === "ENOENT") {
    return;
  }

  console.log(err.toString());
  this.emit("end");
};

gulp.task("browser-sync", function() {
  browserSync.init({
    proxy: "localhost/starter"
  });
});

gulp.task("sass", function() {
  return gulp
    .src("assets/sass/**/*.scss")
    .on("error", onError)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", onError)
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function() {
  gulp.watch("assets/sass/*.scss", ["sass"]).on("change", browserSync.reload);
  gulp
    .watch("assets/sass/**/*.scss", ["sass"])
    .on("change", browserSync.reload);
  gulp.watch("assets/js/**/*.js", ["js"]).on("change", browserSync.reload);
  gulp.watch("*.php").on("change", browserSync.reload);
});

gulp.task("images", function() {
  return gulp
    .src(imgSrc, {
      base: "assets/images/originals"
    })
    .pipe(newer(imgDest))
    .pipe(
      imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      })
    )
    .pipe(gulp.dest(imgDest));
});

var jsDest = "./assets/js/dist/";
var jsFiles = ["./assets/js/dev/app.js"];

gulp.task("js", function() {
  return browserify(jsFiles, { debug: true, extensions: ["es6"] })
    .transform("babelify", { presets: ["es2015"] })
    .bundle()
    .on("error", onError)
    .pipe(source("app.min.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("default", ["sass", "browser-sync", "watch", "images", "js"]);
