const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

/* 
	gulp.task = define tasks
	gulp.src = point to files to use
	gulp.dest = points to folder to output
	gulp.watch = watch files and folders for changes
*/

// Logs Message
gulp.task('message', () => console.log("\n\nRunning Gulp...\n\n"));

// Default task
gulp.task('default', ['message', 'copyHTML', 'imageMin', 'sass', 'scripts']);

// Copy HTML files to dist folder
gulp.task('copyHTML', () => {
	gulp.src("src/*.html")
	    .pipe(gulp.dest("dist"));
});

// Optimise Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// Minify JS
gulp.task('minify', () => {
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js')); 
});

// Concats and Minifies all JS files
gulp.task('scripts', () => {
	gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js')); 
});


// Compile SCSS to CSS
gulp.task('sass', () => {
	gulp.src('src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/styles')); 
});


gulp.task('watch', () => {
	gulp.watch("src/*.html", ["copyHTML"]);
 	gulp.watch("src/images/*", ["imageMin"]);
	gulp.watch("src/styles/*.scss", ["sass"]);
	gulp.watch("src/js/*.js", ["scripts"]);
});