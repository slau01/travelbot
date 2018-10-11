'use strict';
const dispatch = require("./dispatch");

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
