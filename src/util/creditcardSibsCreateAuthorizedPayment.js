import Random from "@reactioncommerce/random";

const METHOD = "creditcard";
const PACKAGE_NAME = "creditcard-sibs-paymentmethod";
const PAYMENT_METHOD_NAME = "creditcardsibs";

// NOTE: The "processor" value is lowercased and then prefixed to various payment Meteor method names,
// so for example, if this is "Example", the list refunds method is expected to be named "example/refund/list"
const PROCESSOR = "CCSIBS";

/**
 * @summary
 * @param {Object} context The request context
 * @param {Object} input Input necessary to create a payment
 * @returns {Object} The payment object in schema expected by the orders plugin
 */
export default async function creditcardSibsCreateAuthorizedPayment(
  context,
  input
) {
  const {
    amount,
    billingAddress,
    shopId,
    paymentData: { fullName },
  } = input;

  return {
    _id: Random.id(),
    address: billingAddress,
    amount,
    createdAt: new Date(),
    data: {
      fullName,
      gqlType: "CreditCardSibsPaymentData", // GraphQL union resolver uses this
    },
    displayName: `Credit Card SIBS`,
    method: METHOD,
    mode: "authorize",
    name: PAYMENT_METHOD_NAME,
    paymentPluginName: PACKAGE_NAME,
    processor: PROCESSOR,
    riskLevel: "normal",
    shopId,
    status: "completed",
    transactionId: Random.id(),
    transactions: [],
  };
}
