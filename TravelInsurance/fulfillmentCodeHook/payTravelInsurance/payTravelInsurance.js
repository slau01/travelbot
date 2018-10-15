'use strict'
const lexResponses = require("./../../common/lexResponses");

function payTravelInsurance(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes;
    const confirmationStatus = intentRequest.currentIntent.confirmationStatus;
    const paymentType = intentRequest.currentIntent.slots.GetPaymentType;
    const tripType = sessionAttributes.tripType;
    const tripStartDate = sessionAttributes.tripStartDate;
    const tripReturnDate = sessionAttributes.tripReturnDate;
    const tripLocation = sessionAttributes.tripLocation;
    const tripTraveller = sessionAttributes.tripTraveller;
    const quote = sessionAttributes.quote;
    var message = "";

    console.log("confirmationStatus: " + confirmationStatus);
    const fulfillmentState = "Fulfilled";

    if (confirmationStatus !== "Denied") {
        message = "We have completed the transaction of HKD " + quote + " from your " + paymentType + ". Have a safe trip to " + tripLocation + " on " + tripStartDate + "!";
    }
    else {
        message = "Okay, your order has been cancelled!.";
    }

    console.log(message);
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
    }
    console.log(response);
    callback(response);
}

module.exports = payTravelInsurance;
