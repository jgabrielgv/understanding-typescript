var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

// telling gulp-typescript to use tsconfig.json file and then resolve all files that typescript thinks it needs to compile. Finally save all compiled files to the root of the project (gulp.dest(''))
gulp.task('typescript', function() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('./bin')) // custom destination
});

// registers the "typescript" task into the "watch" task
gulp.task('watch', function() {
    gulp.watch('*.ts', gulp.series('typescript'));
});

// registers the "watch" task into the "default" task
gulp.task('default', gulp.series('watch'));
