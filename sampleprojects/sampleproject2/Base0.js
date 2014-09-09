/** @module sampleproject2/Base0 */
define(["dcl/dcl"], function (dcl) {
	/**
	 * A sample base widget class.
	 * @class module:sampleproject2/Base0
	 */
	return dcl(null, /** @lends module:sampleproject2/Base0# */ {
		/**
		 * Description for {@link module:sampleproject2/Base0#createdCallback sampleproject2/Base0#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject2/Base0#createdCallback called.");
		}),

		/**
		 * Description for {@link module:sampleproject2/Base0#methodOfBaseCommon sampleproject2/Base0#methodOfBaseCommon}.
		 */
		methodOfBaseCommon: function () {
			console.log("module:sampleproject2/Base0#methodOfBaseCommon called.");
		},

		/**
		 * Description for {@link module:sampleproject2/Base0#methodOfBase0 sampleproject2/Base0#methodOfBase0}.
		 */
		methodOfBase0: function () {
			console.log("module:sampleproject2/Base0#methodOfBase0 called.");
		}
	});
});
