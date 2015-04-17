var assert = require( "assert" );

module.exports = function RequireSpacesInsideJsxExpressionContainerRule() {};

module.exports.prototype = {
	configure: function( options ) {
		assert( options === true, this.getOptionName() + " option requires a true value or should be removed" );
	},

	getOptionName: function() {
		return "requireSpacesInsideJsxExpressionContainers";
	},

	check: function( file, errors ) {
		file.iterateNodesByType( "JSXExpressionContainer", function( node ) {
			var openingBracket = file.getFirstNodeToken( node );
			var nextToken = file.getNextToken( openingBracket );

			errors.assert.whitespaceBetween( {
				token: openingBracket,
				nextToken: nextToken,
				message: "A space is required after the opening curly brace to a JSX expression"
			} );

			var closingBracket = file.getLastNodeToken( node );
			var prevToken = file.getPrevToken( closingBracket );

			errors.assert.whitespaceBetween( {
				token: prevToken,
				nextToken: closingBracket,
				message: "A space is required before the closing curly brace to a JSX expression"
			} );
		} );
	}
};
