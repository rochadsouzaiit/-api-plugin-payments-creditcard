/**
 * @name creditcardSibsCreateRefund
 * @method
 * @summary Create a refund for an order for credit card sibs
 * @param {Object} context an object containing the per-request state
 * @param {Object} payment object containing transaction ID
 * @param {Number} amount the amount to be refunded
 * @param {String} [reason] the reason for the refund
 * @returns {Object} refund result
 * @private
 */
export default async function creditcardSibsCreateRefund(
  context,
  payment,
  amount,
  reason
) {
  const { currencyCode, transactionId } = payment;
  await context.collections.CreditCardSibsPaymentRefunds.insertOne({
    amount,
    createdAt: new Date(),
    currencyCode,
    reason,
    transactionId,
  });
  return { saved: true };
}
