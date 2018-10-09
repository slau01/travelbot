'use strict'

const getTravelInsuranceQuote = require("./getTravelInsuranceQuote");

function dispatch(intentRequest, callback) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);

    const intentName = intentRequest.currentIntent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'GetTravelInsuranceQuote') {
        return getTravelInsuranceQuote(intentRequest, callback);
    }
    /**    else if (intentName === 'BuyTravelInsurance') {
            return BuyTravelInsurance(intentRequest, callback);
        }**/
    throw new Error(`Intent with name ${intentName} not supported`);
}

module.exports = dispatch;
