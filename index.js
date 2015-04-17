var fs = require( "fs" );
var path = require( "path" );

module.exports = function( jscs ) {
	// try to load each rule from the rules directory
	var base = path.join( __dirname, "rules" );
	var rules = fs.readdirSync( base ).forEach( function( file ) {
		try {
			jscs.registerRule( require( path.join( base, file ) ) );
		} catch( ex ) {
			console.warn( ex );
		}
	} );
};
