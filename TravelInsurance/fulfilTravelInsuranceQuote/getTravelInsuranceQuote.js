'use strict'

function getTravelInsuranceQuote(intentRequest, callback) {
    const tripType = intentRequest.currentIntent.slots.GetTripType;
    const tripStartDate = intentRequest.currentIntent.slots.GetTripStartDate;
    const tripReturnDate = intentRequest.currentIntent.slots.GetTripReturnDate;
    const tripLocation = intentRequest.currentIntent.slots.GetTripLocation;
    const tripTraveller = intentRequest.currentIntent.slots.GetTripTaveller;
    const sessionAttributes = intentRequest.sessionAttributes;

    const quote = Math.floor((Math.random() * 1000) + 1);
    const message = "The quote of your trip to " + tripLocation + " from " + tripStartDate + " to " + tripReturnDate + " is HKD " + quote + ".  Please answer 'Yes' to buy or 'No' to cancel.";

    let response = {
        sessionAttributes: sessionAttributes,
        dialogAction: {
            type: "ConfirmIntent",
            intentName: "PayTravelInsurance",
            "slots": {
                "getTravelPaymentType": null,
            },
            message: {
                contentType: "PlainText",
                content: message
            }
        }
    };
    console.log(response);
    callback(response);
}

module.exports = getTravelInsuranceQuote;
