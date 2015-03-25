/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * The `build_dir` folder is where our projects are compiled during the build process
	 */
	build_dir: 'dist',

	app_files: {
		css: 'less/ambient.css'
	},

	vendor_files: {
		less: [
		],
		css: [
			'bower_components/normalize.css/normalize.css'
		]
	}
};
