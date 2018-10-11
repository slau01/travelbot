'use strict'
const lexResponses = require("./../../common/lexResponses");

function payTravelInsurance(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes;
    const paymentType = intentRequest.currentIntent.slots.GetPaymentType;
    const tripType = sessionAttributes.tripType;
    const tripStartDate = sessionAttributes.tripStartDate;
    const tripReturnDate = sessionAttributes.tripReturnDate;
    const tripLocation = sessionAttributes.tripLocation;
    const tripTraveller = sessionAttributes.tripTraveller;
    const quote = sessionAttributes.quote;

    const message = "We have completed the transaction of HKD " + quote + " from your " + paymentType + ". Have a safe trip to " + tripLocation + " on " + tripStartDate + "!";

    const fulfillmentState = "Fulfilled";

    const msg = {
        contentType: "PlainText",
        content: message
    };

    // Keep getting error on passing the fulfilment state
    // let response = lexResponses.close((sessionAttributes, 'Fulfilled', msg));

    let response = {
        sessionAttributes: sessionAttributes,
        dialogAction: {
            type: "Close",
            fulfillmentState: fulfillmentState,
            message: msg
        }
    };

    console.log(response);
    callback(response);
}

module.exports = payTravelInsurance;
