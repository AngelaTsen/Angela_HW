const gulp=require("gulp"),sass=require("gulp-sass")(require("sass")),browserSync=require("browser-sync").create(),notify=require("gulp-notify");gulp.task("sass",(()=>gulp.src("./scss/**/*.scss").pipe(sass()).on("error",(s=>{notify().write(s),this.emit("end")})).pipe(gulp.dest("./")).pipe(browserSync.stream()))),gulp.task("watch",(()=>{browserSync.init({server:{baseDir:"./"}}),gulp.watch("./scss/**/*.scss",gulp.series("sass")),gulp.watch("./*.html").on("change",browserSync.reload)}));