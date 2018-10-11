'use strict'

const getTravelInsuranceIntent = require("./getTravelInsuranceQuote/getTravelInsuranceIntent");
const payTravellnsuranceIntent = require("./payTravelInsurance/payTravelInsuranceIntent");


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
