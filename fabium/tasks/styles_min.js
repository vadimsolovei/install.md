var globals = require('../globals.js')

var src = [
	globals.getPath( globals.config.paths.dist.styles.all ),
	'!' + globals.getPath( globals.config.paths.dist.styles.minified.all )
]

var dest = globals.getPath( globals.config.paths.dist.styles.path )

function stylesMin() {
	return globals.gulp.src( [globals.config.paths.dist.styles.all, '!' + globals.config.paths.dist.styles.minified.all] )
		.pipe(
			globals.$.plumber({
				errorHandler: globals.consoleError
			})
		)
		.pipe( globals.$.csso() )
		.pipe(
			globals.$.rename( function(path) {
				path.basename += '.min';
			})
		)
		.pipe( globals.gulp.dest( globals.config.paths.dist.styles.path ) );
};

globals.gulp.task('styles:min', stylesMin);

module.exports = stylesMin;
