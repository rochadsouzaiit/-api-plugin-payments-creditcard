/**
 * @name creditcardSibsCapturePayment
 * @method
 * @summary Capture payment for Credit Card SIBS payment method
 * @param {Object} context an object containing the per-request state
 * @param {Object} payment object containing authorization ID
 * @returns {Object} result for capturing a payment
 * @private
 */
export default function creditcardSibsCapturePayment() {
  return { saved: true, response: {} };
}
