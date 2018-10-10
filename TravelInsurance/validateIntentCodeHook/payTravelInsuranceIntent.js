'use strict'
//const lexResponses = require("./lexResponses");
const validatePayTravelInsurance = require("./validatePayTravelInsurance");

function elicitSlot(sessionAttributes, intentName, slots, slotToElicit, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'ElicitSlot',
            intentName,
            slots,
            slotToElicit,
            message,
        },
    };
}

function confirmIntent(sessionAttributes, intentName, slots, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'ConfirmIntent',
            intentName,
            slots,
            message,
        },
    };
}

function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}

function delegate(sessionAttributes, slots) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Delegate',
            slots,
        },
    };
}


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
            callback(elicitSlot(sessionAttributes, intentRequest.currentIntent.name,
                slots, validationResult.violatedSlot, validationResult.message));
            return;
        }
        console.log("call delegate");
        callback(delegate(sessionAttributes, intentRequest.currentIntent.slots));
        return;
    }
}
module.exports = payTravelInsuranceIntent;
