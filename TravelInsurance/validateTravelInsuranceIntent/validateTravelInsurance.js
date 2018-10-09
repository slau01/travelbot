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

function isValidRoomType(roomType) {
    const roomTypes = ['queen', 'king', 'deluxe'];
    return (roomTypes.indexOf(roomType.toLowerCase()) > -1);
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

    if (!isValidTripType(tripType)) {
        return buildValidationResult(false, 'GetTripType', `We currently do not support ${tripType} as a valid type.  Can you try a different trip type?`);
    }

    /**
        if (location && !isValidCity(location)) {
            return buildValidationResult(false, 'Location', `We currently do not support ${location} as a valid destination.  Can you try a different city?`);
        }

        if (checkInDate) {
            if (!isValidDate(checkInDate)) {
                return buildValidationResult(false, 'CheckInDate', 'I did not understand your check in date.  When would you like to check in?');
            }
            if (new Date(checkInDate) < new Date()) {
                return buildValidationResult(false, 'CheckInDate', 'Your check in date is in the past!  Can you try a different date?');
            }
        }

        if (nights != null && (nights < 1 || nights > 30)) {
            return buildValidationResult(false, 'Nights', 'You can make a reservations for from one to thirty nights.  How many nights would you like to stay for?');
        }

        if (roomType && !isValidRoomType(roomType)) {
            return buildValidationResult(false, 'RoomType', 'I did not recognize that room type.  Would you like to stay in a queen, king, or deluxe room?');
        }
    **/
    return { isValid: true };
}

module.exports = validateTravelInsurance;
