'use strict'

const getTravelInsuranceIntent = require("./getTravelInsuranceIntent");
const payTravellnsuranceIntent = require("./payTravelInsuranceIntent");


function dispatch(intentRequest, callback) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);

    const intentName = intentRequest.currentIntent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'GetTravelInsuranceQuote') {
        return getTravelInsuranceIntent(intentRequest, callback);
    }
    else if (intentName === 'PayTravelInsurance') {
        return payTravellnsuranceIntent(intentRequest, callback);
    }
    throw new Error(`Intent with name ${intentName} not supported`);
}

module.exports = dispatch;
