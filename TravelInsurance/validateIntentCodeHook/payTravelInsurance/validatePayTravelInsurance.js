'use strict'

function buildValidationResult(isValid, violatedSlot, messageContent) {
    return {
        isValid,
        violatedSlot,
        message: { contentType: 'PlainText', content: messageContent },
    };
}

function isValidPaymentType(paymentType) {
    console.log("inside isvalidpaymentype");
    const validPaymentTypes = ['alipay', 'wechat pay', 'payme', 'debit card', 'master card', 'visa card'];
    return (validPaymentTypes.indexOf(paymentType.toLowerCase()) > -1);
}


function validatePayTravelInsurance(slots) {
    const paymentType = slots.GetPaymentType;

    if (paymentType != null) {
        if (!isValidPaymentType(paymentType)) {
            console.log("invalid paymentType");
            return buildValidationResult(false, 'GetPaymentType', `Payment Type ${paymentType} is not valid.  Enter a different payment type!`);
        }
    }


    return { isValid: true };
}

module.exports = validatePayTravelInsurance;
