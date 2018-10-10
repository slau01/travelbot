'use strict'

function payTravelInsurance(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes;
    const paymentType = intentRequest.currentIntent.slots.GetTravelPaymentType;
    const tripType = sessionAttributes.tripType;
    const tripStartDate = sessionAttributes.tripStartDate;
    const tripReturnDate = sessionAttributes.tripReturnDate;
    const tripLocation = sessionAttributes.tripLocation;
    const tripTraveller = sessionAttributes.tripTraveller;
    const quote = sessionAttributes.quote;

    const message = "We have completed the transaction of HKD " + quote + " from your " + paymentType + ". Have a safe trip to " + tripLocation + " on " + tripStartDate + "!";

    let response = {
        sessionAttributes: sessionAttributes,
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType: "PlainText",
                content: message
            }
        }
    };
    console.log(response);
    callback(response);
}

module.exports = payTravelInsurance;
