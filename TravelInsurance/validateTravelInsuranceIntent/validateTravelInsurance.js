'use strict'

function buildValidationResult(isValid, violatedSlot, messageContent) {
    return {
        isValid,
        violatedSlot,
        message: { contentType: 'PlainText', content: messageContent },
    };
}

function isValidTripType(tripType) {
    const validTripTypes = ['single trip', 'multi trip'];
    return (validTripTypes.indexOf(tripType.toLowerCase()) > -1);
}

function isValidTripLocation(tripLocation) {
    return (tripLocation.length > 1);
}


function isValidTripTraveller(tripTraveller) {
    const validTripTraveller = ['spouse and children only', 'spouse only', 'self only', 'self and children only', 'self and spouse only', 'self, spouse, and children only'];
    return (validTripTraveller.indexOf(tripTraveller.toLowerCase()) > -1);
}


function isValidDate(date) {
    return !(isNaN(Date.parse(date)));
}

function getDayDifference(earlierDate, laterDate) {
    const laterDateInDaysSinceEpoch = new Date(laterDate).getTime() / 86400000;
    const earlierDateInDaysSinceEpoch = new Date(earlierDate).getTime() / 86400000;
    return Number(laterDateInDaysSinceEpoch - earlierDateInDaysSinceEpoch).toFixed(0);
}

function addDays(date, numberOfDays) {
    const newDate = new Date(date);
    newDate.setTime(newDate.getTime() + (86400000 * numberOfDays));
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
}


function validateTravelInsurance(slots) {
    const tripType = slots.GetTripType;
    const tripStartDate = slots.GetTripStartDate;
    const tripReturnDate = slots.GetTripReturnDate;
    const tripLocation = slots.GetTripLocation;
    const tripTraveller = slots.GetTripTravller;

    if (tripType != null) {
        if (!isValidTripType(tripType)) {
            console.log("invalid trip type");
            return buildValidationResult(false, 'GetTripType', `Trip Type ${tripType} is not valid.  Enter a different trip type!`);
        }
    }

    if (tripTraveller != null) {
        if (!isValidTripTraveller(tripTraveller)) {
            console.log("invalid trip traveller");
            return buildValidationResult(false, 'GetTripTravller', `Traveller ${tripTraveller} is not valid.  Enter a different trip traveller!`);
        }
    }

    if (tripStartDate) {
        if (!isValidDate(tripStartDate)) {
            return buildValidationResult(false, 'GetTripStartDate', 'I did not understand your trip start date.  When would you like to leave?');
        }
        if (new Date(tripStartDate) < new Date()) {
            return buildValidationResult(false, 'GetTripStartDate', 'Your trip start date is in the past!  Can you try a different date?');
        }
    }

    if (tripReturnDate) {
        if (!isValidDate(tripReturnDate)) {
            return buildValidationResult(false, 'GetTripReturnDate', 'I did not understand your trip return date.  When would you like to return?');
        }
        if (new Date(tripReturnDate) < new Date(tripStartDate)) {
            return buildValidationResult(false, 'GetTripReturnDate', 'Your trip return date is before the trip start date!  Can you try a different date?');
        }
    }


    if (tripLocation != null) {
        if (!isValidTripLocation(tripLocation)) {
            console.log("invalid trip location");
            return buildValidationResult(false, 'GetTripLocation', `Location ${tripLocation} is not valid.  Enter a different trip location!`);
        }
    }

    return { isValid: true };
}

module.exports = validateTravelInsurance;
