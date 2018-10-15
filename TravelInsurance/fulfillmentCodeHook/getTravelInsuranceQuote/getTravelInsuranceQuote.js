'use strict'
const lexResponses = require("./../../common/lexResponses");

function getTravelInsuranceQuote(intentRequest, callback) {
    const tripType = intentRequest.currentIntent.slots.GetTripType;
    const tripStartDate = intentRequest.currentIntent.slots.GetTripStartDate;
    const tripReturnDate = intentRequest.currentIntent.slots.GetTripReturnDate;
    const tripLocation = intentRequest.currentIntent.slots.GetTripLocation;
    const tripTraveller = intentRequest.currentIntent.slots.GetTripTraveller;
    const imageUrl = "https://s3-eu-west-1.amazonaws.com/pathfinderpoc/hsbc-logo.JPG";


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

    const message = "The quote of your trip is HKD " + quote + "." +
        "\n   Trip Type: " + tripType +
        "\n   Traveller: " + tripTraveller +
        "\n   Start Date: " + tripStartDate +
        "\n   Return Date: " + tripReturnDate +
        "\n   Location: " + tripLocation;

    const intentName = "PayTravelInsurance";
    const slots = {
        "GetPaymentType": null,
    };
    const msg = {
        "contentType": "PlainText",
        "content": message
    };
    const buttons = [{
            "text": "Yes",
            "value": "Yes"
        },
        {
            "text": "No",
            "value": "No"
        }
    ];


    let response = {
        sessionAttributes: sessionAttributes,
        dialogAction: {
            "type": "ConfirmIntent",
            "message": msg,
            "intentName": intentName,
            "slots": slots,
            "responseCard": {
                "version": 1,
                "contentType": "application/vnd.amazonaws.card.generic",
                "genericAttachments": [{
                    "title": "Buy Insurance",
                    "subTitle": "Select the button.",
                    "imageUrl": imageUrl,
                    "attachmentLinkUrl": "https://www.hsbc.com.hk",
                    "buttons": buttons,
                }]
            }
        }
    }

    console.log(response);
    callback(response);
}

module.exports = getTravelInsuranceQuote;
