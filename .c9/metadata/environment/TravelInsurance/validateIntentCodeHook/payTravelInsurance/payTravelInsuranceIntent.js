{"filter":false,"title":"payTravelInsuranceIntent.js","tooltip":"/TravelInsurance/validateIntentCodeHook/payTravelInsurance/payTravelInsuranceIntent.js","undoManager":{"mark":12,"position":12,"stack":[[{"start":{"row":3,"column":0},"end":{"row":3,"column":60},"action":"insert","lines":["const lexResponses = require(\"./../../common/lexResponses\");"],"id":1}],[{"start":{"row":3,"column":60},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":4,"column":0},"end":{"row":50,"column":0},"action":"remove","lines":["","function elicitSlot(sessionAttributes, intentName, slots, slotToElicit, message) {","    return {","        sessionAttributes,","        dialogAction: {","            type: 'ElicitSlot',","            intentName,","            slots,","            slotToElicit,","            message,","        },","    };","}","","function confirmIntent(sessionAttributes, intentName, slots, message) {","    return {","        sessionAttributes,","        dialogAction: {","            type: 'ConfirmIntent',","            intentName,","            slots,","            message,","        },","    };","}","","function close(sessionAttributes, fulfillmentState, message) {","    return {","        sessionAttributes,","        dialogAction: {","            type: 'Close',","            fulfillmentState,","            message,","        },","    };","}","","function delegate(sessionAttributes, slots) {","    return {","        sessionAttributes,","        dialogAction: {","            type: 'Delegate',","            slots,","        },","    };","}",""],"id":3}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":4}],[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["l"],"id":5},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["e"]},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["x"]},{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["r"]},{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["e"]},{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["p"],"id":6},{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["o"]},{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["n"]},{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["s"]},{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["e"]},{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":["s"]}],[{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"insert","lines":["."],"id":7}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"remove","lines":["r"],"id":8}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["R"],"id":9}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["l"],"id":10},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["e"]},{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["x"]}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":24},"action":"remove","lines":["lex"],"id":11},{"start":{"row":23,"column":21},"end":{"row":23,"column":33},"action":"insert","lines":["lexResponses"]}],[{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"insert","lines":["."],"id":12}],[{"start":{"row":23,"column":34},"end":{"row":23,"column":44},"action":"remove","lines":["elicitSlot"],"id":13},{"start":{"row":23,"column":34},"end":{"row":23,"column":44},"action":"insert","lines":["elicitSlot"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":33,"column":0},"end":{"row":33,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1539229210652,"hash":"2072bc6e929e5df6ea9d0b98b84696a62e9aa589"}