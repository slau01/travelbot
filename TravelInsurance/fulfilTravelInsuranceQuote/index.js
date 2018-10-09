'use strict';
const dispatch = require("./dispatch");

/**
exports.handler = (event, context, callback) => {
    // when intent get fulfilled, inform lex to complete the state
    console.log("EVENT= " + JSON.stringify(context));
    const quote = Math.floor((Math.random() * 1000) + 1);
    var tripType = event.currentIntent.slots.GetTripType;
    var tripStartDate = event.currentIntent.slots.GetTripStartDate;
    var tripReturnDate = event.currentIntent.slots.GetTripReturnDate;
    var tripLocation = event.currentIntent.slots.GetTripLocation;
    var tripTraveller = event.currentIntent.slots.GetTripTaveller;
    var msg = "The quote of your trip to " + tripLocation + " from " + tripStartDate + " to " + tripReturnDate + " is HKD " + quote + "."
    let response = {
        sessionAttributes: event.sessionAttributes,
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType: "PlainText",
                content: msg
            }
        }
    }
    callback(null, response);
};
**/


// --------------- Main handler -----------------------

// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        console.log(`event.bot.name=${event.bot.name}`);
        if (event.bot.name != 'BuyTravelInsurance') {
            callback('Invalid Bot Name');
        }
        dispatch(event, (response) => callback(null, response));
    }
    catch (err) {
        callback(err);
    }
};
