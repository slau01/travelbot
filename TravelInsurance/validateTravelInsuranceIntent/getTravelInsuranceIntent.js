'use strict'
//const lexResponses = require("./lexResponses");
const validateTravelInsurance = require("./validateTravelInsurance");

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


function getTravelInsuranceIntent(intentRequest, callback) {
    const tripType = intentRequest.currentIntent.slots.GetTripType;
    const tripStartDate = intentRequest.currentIntent.slots.GetTripStartDate;
    const tripReturnDate = intentRequest.currentIntent.slots.GetTripReturnDate;
    const tripLocation = intentRequest.currentIntent.slots.GetTripLocation;
    const tripTraveller = intentRequest.currentIntent.slots.GetTripTaveller;
    const sessionAttributes = intentRequest.sessionAttributes;

    console.log(intentRequest.invocationSource);
    console.log(intentRequest.currentIntent.slots);
    if (tripType == null || tripTraveller == null || tripStartDate == null || tripReturnDate == null || tripLocation == null) {
        console.log("inside trip type null check");
        callback(delegate(sessionAttributes, intentRequest.currentIntent.slots));
    }

    if (intentRequest.invocationSource === 'DialogCodeHook') {
        const validationResult = validateTravelInsurance(intentRequest.currentIntent.slots);
        if (!validationResult.isValid) {
            const slots = intentRequest.currentIntent.slots;
            slots[`${validationResult.violatedSlot}`] = null;
            callback(elicitSlot(sessionAttributes, intentRequest.currentIntent.name,
                slots, validationResult.violatedSlot, validationResult.message));
            return;
        }

        /**
            // Load confirmation history and track the current reservation.
            const reservation = String(JSON.stringify({ ReservationType: 'Hotel', Location: location, RoomType: roomType, CheckInDate: checkInDate, Nights: nights }));
            sessionAttributes.currentReservation = reservation;

            if (intentRequest.invocationSource === 'DialogCodeHook') {
                // Validate any slots which have been specified.  If any are invalid, re-elicit for their value
                const validationResult = validateHotel(intentRequest.currentIntent.slots);
                if (!validationResult.isValid) {
                    const slots = intentRequest.currentIntent.slots;
                    slots[`${validationResult.violatedSlot}`] = null;
                    callback(elicitSlot(sessionAttributes, intentRequest.currentIntent.name,
                    slots, validationResult.violatedSlot, validationResult.message));
                    return;
                }

                // Otherwise, let native DM rules determine how to elicit for slots and prompt for confirmation.  Pass price back in sessionAttributes once it can be calculated; otherwise clear any setting from sessionAttributes.
                if (location && checkInDate && nights != null && roomType) {
                    // The price of the hotel has yet to be confirmed.
                    const price = generateHotelPrice(location, nights, roomType);
                    sessionAttributes.currentReservationPrice = price;
                } else {
                    delete sessionAttributes.currentReservationPrice;
                }
                sessionAttributes.currentReservation = reservation;
                callback(delegate(sessionAttributes, intentRequest.currentIntent.slots));
                return;
            }

            // Booking the hotel.  In a real application, this would likely involve a call to a backend service.
            console.log(`bookHotel under=${reservation}`);

            delete sessionAttributes.currentReservationPrice;
            delete sessionAttributes.currentReservation;
            sessionAttributes.lastConfirmedReservation = reservation;
        **/
        /**
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
        **/
    }
}
module.exports = getTravelInsuranceIntent;
