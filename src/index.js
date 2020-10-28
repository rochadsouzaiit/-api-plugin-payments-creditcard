import pkg from "../package.json";
import i18n from "./i18n/index.js";
import schemas from "./schemas/index.js";
import creditcardSibsCapturePayment from "./util/creditcardSibsCapturePayment.js";
import creditcardSibsCreateAuthorizedPayment from "./util/creditcardSibsCreateAuthorizedPayment.js";
import creditcardSibsCreateRefund from "./util/creditcardSibsCreateRefund.js";
import creditcardSibsListRefunds from "./util/creditcardSibsListRefunds.js";
import startup from "./startup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Credit Card SIBS",
    name: "creditcardsibs",
    version: pkg.version,
    i18n,
    graphQL: {
      schemas,
    },
    functionsByType: {
      startup: [startup],
    },
    paymentMethods: [
      {
        name: "creditcardsibs",
        canRefund: true,
        displayName: "CREADIT-CARD-SIBS",
        functions: {
          capturePayment: creditcardSibsCapturePayment,
          createAuthorizedPayment: creditcardSibsCreateAuthorizedPayment,
          createRefund: creditcardSibsCreateRefund,
          listRefunds: creditcardSibsListRefunds,
        },
      },
    ],
  });
}
