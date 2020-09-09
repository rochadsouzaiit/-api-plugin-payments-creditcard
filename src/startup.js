/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
export default function CreditCardSibsPaymentsStartup(context) {
  context.collections.CreditCardSibsPaymentRefunds = context.app.db.collection(
    "CreditCardSibsPaymentRefunds"
  );
}
