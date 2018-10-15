'use strict';

module.exports.elicitSlot = function(sessionAttributes, intentName, slots, slotToElicit, message) {
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

module.exports.confirmIntent = function(sessionAttributes, intentName, slots, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'ConfirmIntent',
            intentName,
            slots,
            message,
            responsecard,
        },
    };
}

module.exports.close = function(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}

module.exports.delegate = function(sessionAttributes, slots) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Delegate',
            slots,
        },
    };
}

module.exports.getResponseCard = function(title, subTitle, imageUrl, buttons) {
    return {
        contentType: 'application/vnd.amazonaws.card.generic',
        genericAttachments: [{
            title,
            subTitle,
            imageUrl,
            buttons
        }]
    };
}
