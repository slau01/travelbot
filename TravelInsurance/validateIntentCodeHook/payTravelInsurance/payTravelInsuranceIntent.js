'use strict'
//const lexResponses = require("./lexResponses");
const validatePayTravelInsurance = require("./validatePayTravelInsurance");
const lexResponses = require("./../../common/lexResponses");

function payTravelInsuranceIntent(intentRequest, callback) {
    const tripType = intentRequest.currentIntent.slots.GetTripType;
    const tripStartDate = intentRequest.currentIntent.slots.GetTripStartDate;
    const tripReturnDate = intentRequest.currentIntent.slots.GetTripReturnDate;
    const tripLocation = intentRequest.currentIntent.slots.GetTripLocation;
    const tripTraveller = intentRequest.currentIntent.slots.GetTripTaveller;
    const sessionAttributes = intentRequest.sessionAttributes;

    console.log(intentRequest.invocationSource);
    console.log(intentRequest.currentIntent.slots);

    if (intentRequest.invocationSource === 'DialogCodeHook') {
        const validationResult = validatePayTravelInsurance(intentRequest.currentIntent.slots);
        console.log("after validation Travel Insurance")
        if (!validationResult.isValid) {
            const slots = intentRequest.currentIntent.slots;
            slots[`${validationResult.violatedSlot}`] = null;
            console.log("call elicitSlot: " + slots.currentIntent);
            callback(lexResponses.elicitSlot(sessionAttributes, intentRequest.currentIntent.name,
                slots, validationResult.violatedSlot, validationResult.message));
            return;
        }
        console.log("call delegate");
        callback(lexResponses.delegate(sessionAttributes, intentRequest.currentIntent.slots));
        return;
    }
}
module.exports = payTravelInsuranceIntent;
