/** @module sampleproject2/MixinInheritingImported */
define([
	"dcl/dcl",
	"sampleframework/Base0",
	"sampleproject/Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject2/MixinInheritingImported
	 * @mixin
	 * @augments {module:sampleframework/Base0}
	 * @augments {module:sampleproject/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleproject2/MixinInheritingImported# */ {
		/**
		 * Description
		 * for {@link module:sampleproject2/MixinInheritingImported#createdCallback sampleproject2/MixinInheritingImported#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject2/MixinInheritingImported#createdCallback called.");
		})
	});
});
