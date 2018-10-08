{"filter":false,"title":"getTravelInsuranceQuote.js","tooltip":"/TravelInsurnace/TravelInsurnace/getTravelInsuranceQuote.js","undoManager":{"mark":15,"position":15,"stack":[[{"start":{"row":0,"column":0},"end":{"row":58,"column":1},"action":"insert","lines":["function getTravelInsuranceQuote(intentRequest, callback) {","    const quote = Math.floor((Math.random() * 1000) + 1);","    const tripType = intentRequest.currentIntent.slots.GetTripType;","    const tripStartDate = intentRequest.currentIntent.slots.GetTripStartDate;","    const tripReturnDate = intentRequest.currentIntent.slots.GetTripReturnDate;","    const tripLocation = intentRequest.currentIntent.slots.GetTripLocation;","    const tripTraveller = intentRequest.currentIntent.slots.GetTripTaveller;","    const sessionAttributes = intentRequest.sessionAttributes;","","    /**","        // Load confirmation history and track the current reservation.","        const reservation = String(JSON.stringify({ ReservationType: 'Hotel', Location: location, RoomType: roomType, CheckInDate: checkInDate, Nights: nights }));","        sessionAttributes.currentReservation = reservation;","","        if (intentRequest.invocationSource === 'DialogCodeHook') {","            // Validate any slots which have been specified.  If any are invalid, re-elicit for their value","            const validationResult = validateHotel(intentRequest.currentIntent.slots);","            if (!validationResult.isValid) {","                const slots = intentRequest.currentIntent.slots;","                slots[`${validationResult.violatedSlot}`] = null;","                callback(elicitSlot(sessionAttributes, intentRequest.currentIntent.name,","                slots, validationResult.violatedSlot, validationResult.message));","                return;","            }","","            // Otherwise, let native DM rules determine how to elicit for slots and prompt for confirmation.  Pass price back in sessionAttributes once it can be calculated; otherwise clear any setting from sessionAttributes.","            if (location && checkInDate && nights != null && roomType) {","                // The price of the hotel has yet to be confirmed.","                const price = generateHotelPrice(location, nights, roomType);","                sessionAttributes.currentReservationPrice = price;","            } else {","                delete sessionAttributes.currentReservationPrice;","            }","            sessionAttributes.currentReservation = reservation;","            callback(delegate(sessionAttributes, intentRequest.currentIntent.slots));","            return;","        }","","        // Booking the hotel.  In a real application, this would likely involve a call to a backend service.","        console.log(`bookHotel under=${reservation}`);","","        delete sessionAttributes.currentReservationPrice;","        delete sessionAttributes.currentReservation;","        sessionAttributes.lastConfirmedReservation = reservation;","    **/","    var msg = \"The quote of your trip to \" + tripLocation + \" from \" + tripStartDate + \" to \" + tripReturnDate + \" is HKD \" + quote + \".\";","    let response = {","        sessionAttributes: sessionAttributes,","        dialogAction: {","            type: \"Close\",","            fulfillmentState: \"Fulfilled\",","            message: {","                contentType: \"PlainText\",","                content: msg","            }","        }","    }","    callback(response);","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["u"],"id":3},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["s"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":4},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["s"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["t"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["r"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["i"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["c"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":12},"action":"insert","lines":["  "],"id":5}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":[" "],"id":6},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"remove","lines":[" "]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["t"]}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["t"],"id":7},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["'"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["'"],"id":8}],[{"start":{"row":60,"column":1},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":61,"column":0},"end":{"row":62,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":21},"action":"insert","lines":["module.exports = foo;"],"id":10}],[{"start":{"row":62,"column":19},"end":{"row":62,"column":20},"action":"remove","lines":["o"],"id":11},{"start":{"row":62,"column":18},"end":{"row":62,"column":19},"action":"remove","lines":["o"]},{"start":{"row":62,"column":17},"end":{"row":62,"column":18},"action":"remove","lines":["f"]}],[{"start":{"row":62,"column":17},"end":{"row":62,"column":18},"action":"insert","lines":["g"],"id":12},{"start":{"row":62,"column":18},"end":{"row":62,"column":19},"action":"insert","lines":["e"]},{"start":{"row":62,"column":19},"end":{"row":62,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":62,"column":17},"end":{"row":62,"column":20},"action":"remove","lines":["get"],"id":13},{"start":{"row":62,"column":17},"end":{"row":62,"column":42},"action":"insert","lines":["getTravelInsuranceQuote()"]}],[{"start":{"row":62,"column":42},"end":{"row":62,"column":43},"action":"remove","lines":[";"],"id":14},{"start":{"row":62,"column":41},"end":{"row":62,"column":42},"action":"remove","lines":[")"]},{"start":{"row":62,"column":40},"end":{"row":62,"column":41},"action":"remove","lines":["("]}],[{"start":{"row":62,"column":40},"end":{"row":62,"column":41},"action":"insert","lines":[";"],"id":15}],[{"start":{"row":62,"column":41},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":16}]]},"ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":11,"column":7},"end":{"row":11,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"doc-start","mode":"ace/mode/javascript"}},"timestamp":1538990035787,"hash":"615ae6141e010eb63eaf6e1004d2146ee35fdc1d"}