/** @module sampleproject2/Base1 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * Another sample base widget class.
	 * @class module:sampleproject2/Base1
	 */
	return dcl(null, /** @lends module:sampleproject2/Base1# */ {
		/**
		 * Description for {@link module:sampleproject2/Base1#createdCallback sampleproject2/Base1#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject2/Base1#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleproject2/Base1#methodOfBaseCommon sampleproject2/Base1#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleproject2/Base1#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleproject2/Base1#methodOfBase1 sampleproject2/Base1#methodOfBase1}.
		 */
		methodOfBase1: function () {
			console.log("module:sampleproject2/Base1#methodOfBase1 called.");
		}
	});
});
