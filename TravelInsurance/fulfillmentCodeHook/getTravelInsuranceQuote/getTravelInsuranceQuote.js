'use strict'
const lexResponses = require("./../../common/lexResponses");

function getTravelInsuranceQuote(intentRequest, callback) {
    const tripType = intentRequest.currentIntent.slots.GetTripType;
    const tripStartDate = intentRequest.currentIntent.slots.GetTripStartDate;
    const tripReturnDate = intentRequest.currentIntent.slots.GetTripReturnDate;
    const tripLocation = intentRequest.currentIntent.slots.GetTripLocation;
    const tripTraveller = intentRequest.currentIntent.slots.GetTripTraveller;
    //replace it with an API call to TP
    const quote = Math.floor((Math.random() * 1000) + 1);

    const sessionAttributes = {
        "tripType": tripType,
        "tripStartDate": tripStartDate,
        "tripReturnDate": tripReturnDate,
        "tripLocation": tripLocation,
        "tripTraveller": tripTraveller,
        "quote": quote,
        "paymentType": ""
    };

    const message = "The quote of your trip is HKD " + quote + ".\n Answer 'Yes' to proceed. 'No' to cancel." +
        "\n Trip Type: " + tripType +
        "\n Traveller: " + tripTraveller +
        "\n Start Date: " + tripStartDate +
        "\n Return Date: " + tripReturnDate +
        "\n Location: " + tripLocation;

    const intentName = "PayTravelInsurance";
    const slots = {
        "GetPaymentType": null,
    };
    const msg = {
        "contentType": "PlainText",
        "content": message
    };

    let response = lexResponses.confirmIntent(sessionAttributes, intentName, slots, msg);
    console.log(response);
    callback(response);
}

module.exports = getTravelInsuranceQuote;
