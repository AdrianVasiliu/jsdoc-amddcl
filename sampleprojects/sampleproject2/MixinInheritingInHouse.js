/** @module sampleproject2/MixinInheritingInHouse */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject2/MixinInheritingInHouse
	 * @mixin
	 * @augments {module:sampleproject2/Base0}
	 * @augments {module:sampleproject2/Base1}
	 */
	return dcl([Base0, Base1], /** @lends module:sampleproject2/MixinInheritingInHouse# */ {
		/**
		 * Description
		 * for {@link module:sampleproject2/MixinInheritingInHouse#createdCallback sampleproject2/MixinInheritingInHouse#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject2/MixinInheritingInHouse#createdCallback called.");
		})
	});
});
