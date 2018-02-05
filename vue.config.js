const fs = require('fs');

module.exports = {
	lintOnSave: true,
	css: {
		loaderOptions: {
			sass: {
				data: fs.readFileSync('./src/stylesheets/variables.scss', 'utf-8'),
			},
		},
	},
};
