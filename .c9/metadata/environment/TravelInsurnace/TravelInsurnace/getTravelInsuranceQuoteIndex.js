{"filter":false,"title":"getTravelInsuranceQuoteIndex.js","tooltip":"/TravelInsurnace/TravelInsurnace/getTravelInsuranceQuoteIndex.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":["n"],"id":77},{"start":{"row":29,"column":7},"end":{"row":29,"column":8},"action":"insert","lines":["s"]},{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":7},"action":"remove","lines":["var"],"id":78},{"start":{"row":30,"column":4},"end":{"row":30,"column":9},"action":"insert","lines":["const"]}],[{"start":{"row":31,"column":4},"end":{"row":31,"column":7},"action":"remove","lines":["var"],"id":79},{"start":{"row":31,"column":4},"end":{"row":31,"column":9},"action":"insert","lines":["const"]}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":7},"action":"remove","lines":["var"],"id":80},{"start":{"row":32,"column":4},"end":{"row":32,"column":9},"action":"insert","lines":["const"]}],[{"start":{"row":33,"column":4},"end":{"row":33,"column":7},"action":"remove","lines":["var"],"id":81},{"start":{"row":33,"column":4},"end":{"row":33,"column":9},"action":"insert","lines":["const"]}],[{"start":{"row":34,"column":3},"end":{"row":34,"column":137},"action":"remove","lines":[" var msg = \"The quote of your trip to \" + tripLocation + \" from \" + tripStartDate + \" to \" + tripReturnDate + \" is HKD \" + quote + \".\""],"id":82}],[{"start":{"row":34,"column":3},"end":{"row":35,"column":4},"action":"remove","lines":["","    "],"id":83}],[{"start":{"row":29,"column":21},"end":{"row":29,"column":26},"action":"remove","lines":["event"],"id":85},{"start":{"row":29,"column":21},"end":{"row":29,"column":34},"action":"insert","lines":["intentRequest"]}],[{"start":{"row":30,"column":26},"end":{"row":30,"column":31},"action":"remove","lines":["event"],"id":86},{"start":{"row":30,"column":26},"end":{"row":30,"column":39},"action":"insert","lines":["intentRequest"]}],[{"start":{"row":31,"column":27},"end":{"row":31,"column":32},"action":"remove","lines":["event"],"id":87},{"start":{"row":31,"column":27},"end":{"row":31,"column":40},"action":"insert","lines":["intentRequest"]}],[{"start":{"row":32,"column":25},"end":{"row":32,"column":30},"action":"remove","lines":["event"],"id":88},{"start":{"row":32,"column":25},"end":{"row":32,"column":38},"action":"insert","lines":["intentRequest"]}],[{"start":{"row":33,"column":26},"end":{"row":33,"column":31},"action":"remove","lines":["event"],"id":89},{"start":{"row":33,"column":26},"end":{"row":33,"column":39},"action":"insert","lines":["intentRequest"]}],[{"start":{"row":35,"column":4},"end":{"row":38,"column":64},"action":"remove","lines":["const location = intentRequest.currentIntent.slots.Location;","    const checkInDate = intentRequest.currentIntent.slots.CheckInDate;","    const nights = intentRequest.currentIntent.slots.Nights;","    const roomType = intentRequest.currentIntent.slots.RoomType;"],"id":90}],[{"start":{"row":34,"column":3},"end":{"row":35,"column":4},"action":"remove","lines":["","    "],"id":91},{"start":{"row":34,"column":3},"end":{"row":35,"column":0},"action":"remove","lines":["",""]},{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"remove","lines":[" "],"id":92},{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":["/"],"id":93},{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"insert","lines":["*"]},{"start":{"row":39,"column":2},"end":{"row":39,"column":3},"action":"insert","lines":["*"]}],[{"start":{"row":63,"column":0},"end":{"row":63,"column":1},"action":"insert","lines":["*"],"id":94},{"start":{"row":63,"column":1},"end":{"row":63,"column":2},"action":"insert","lines":["*"]},{"start":{"row":63,"column":2},"end":{"row":63,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":63,"column":0},"end":{"row":63,"column":3},"action":"remove","lines":["**/"],"id":95}],[{"start":{"row":70,"column":0},"end":{"row":70,"column":3},"action":"insert","lines":["**/"],"id":96}],[{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"remove","lines":["/**"],"id":97}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["/**"],"id":98}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":99}],[{"start":{"row":71,"column":3},"end":{"row":72,"column":0},"action":"insert","lines":["",""],"id":100}],[{"start":{"row":72,"column":0},"end":{"row":72,"column":3},"action":"insert","lines":["/**"],"id":101}],[{"start":{"row":72,"column":2},"end":{"row":72,"column":3},"action":"remove","lines":["*"],"id":102},{"start":{"row":72,"column":1},"end":{"row":72,"column":2},"action":"remove","lines":["*"]},{"start":{"row":72,"column":0},"end":{"row":72,"column":1},"action":"remove","lines":["/"]},{"start":{"row":71,"column":3},"end":{"row":72,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":71,"column":3},"end":{"row":72,"column":0},"action":"insert","lines":["",""],"id":103}],[{"start":{"row":72,"column":0},"end":{"row":72,"column":136},"action":"insert","lines":["   var msg = \"The quote of your trip to \" + tripLocation + \" from \" + tripStartDate + \" to \" + tripReturnDate + \" is HKD \" + quote + \".\""],"id":104}],[{"start":{"row":74,"column":41},"end":{"row":74,"column":160},"action":"remove","lines":["'Thanks, I have placed your reservation.   Please let me know if you would like to book a car rental, or another hotel."],"id":105},{"start":{"row":74,"column":41},"end":{"row":74,"column":42},"action":"remove","lines":["'"]}],[{"start":{"row":74,"column":41},"end":{"row":74,"column":42},"action":"insert","lines":["m"],"id":106},{"start":{"row":74,"column":42},"end":{"row":74,"column":43},"action":"insert","lines":["s"]},{"start":{"row":74,"column":43},"end":{"row":74,"column":44},"action":"insert","lines":["g"]}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["    "],"id":107},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"insert","lines":["    "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"insert","lines":["    "]},{"start":{"row":39,"column":4},"end":{"row":39,"column":8},"action":"insert","lines":["    "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":1},"action":"insert","lines":[" "]},{"start":{"row":41,"column":5},"end":{"row":41,"column":8},"action":"insert","lines":["   "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":43,"column":10},"end":{"row":43,"column":12},"action":"insert","lines":["  "]},{"start":{"row":44,"column":8},"end":{"row":44,"column":12},"action":"insert","lines":["    "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":14},"end":{"row":45,"column":16},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["   "]},{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":[" "]},{"start":{"row":48,"column":12},"end":{"row":48,"column":16},"action":"insert","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":3},"action":"insert","lines":["   "]},{"start":{"row":49,"column":15},"end":{"row":49,"column":16},"action":"insert","lines":[" "]},{"start":{"row":50,"column":8},"end":{"row":50,"column":12},"action":"insert","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]},{"start":{"row":53,"column":8},"end":{"row":53,"column":12},"action":"insert","lines":["    "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":3},"action":"insert","lines":["   "]},{"start":{"row":54,"column":15},"end":{"row":54,"column":16},"action":"insert","lines":[" "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"insert","lines":["    "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"insert","lines":["    "]},{"start":{"row":57,"column":8},"end":{"row":57,"column":12},"action":"insert","lines":["    "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":4},"action":"insert","lines":["    "]},{"start":{"row":59,"column":8},"end":{"row":59,"column":12},"action":"insert","lines":["    "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"insert","lines":["    "]},{"start":{"row":61,"column":0},"end":{"row":61,"column":4},"action":"insert","lines":["    "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"insert","lines":["    "]},{"start":{"row":63,"column":4},"end":{"row":63,"column":8},"action":"insert","lines":["    "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":4},"action":"insert","lines":["    "]},{"start":{"row":66,"column":0},"end":{"row":66,"column":1},"action":"insert","lines":[" "]},{"start":{"row":66,"column":5},"end":{"row":66,"column":8},"action":"insert","lines":["   "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":1},"action":"insert","lines":[" "]},{"start":{"row":68,"column":5},"end":{"row":68,"column":8},"action":"insert","lines":["   "]},{"start":{"row":69,"column":0},"end":{"row":69,"column":1},"action":"insert","lines":[" "]},{"start":{"row":69,"column":5},"end":{"row":69,"column":8},"action":"insert","lines":["   "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":4},"action":"insert","lines":["    "]},{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"insert","lines":["    "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":1},"action":"insert","lines":[" "]},{"start":{"row":73,"column":50},"end":{"row":74,"column":3},"action":"remove","lines":["","   "]},{"start":{"row":86,"column":5},"end":{"row":87,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":102,"column":12},"end":{"row":102,"column":13},"action":"remove","lines":[" "]},{"start":{"row":106,"column":5},"end":{"row":107,"column":3},"action":"insert","lines":["","   "]},{"start":{"row":110,"column":2},"end":{"row":111,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":104,"column":8},"end":{"row":104,"column":10},"action":"remove","lines":["*/"],"id":108}],[{"start":{"row":104,"column":0},"end":{"row":104,"column":8},"action":"remove","lines":["        "],"id":109}],[{"start":{"row":101,"column":39},"end":{"row":101,"column":40},"action":"remove","lines":["t"],"id":110},{"start":{"row":101,"column":38},"end":{"row":101,"column":39},"action":"remove","lines":["o"]},{"start":{"row":101,"column":37},"end":{"row":101,"column":38},"action":"remove","lines":["B"]},{"start":{"row":101,"column":36},"end":{"row":101,"column":37},"action":"remove","lines":["l"]},{"start":{"row":101,"column":35},"end":{"row":101,"column":36},"action":"remove","lines":["e"]},{"start":{"row":101,"column":34},"end":{"row":101,"column":35},"action":"remove","lines":["v"]},{"start":{"row":101,"column":33},"end":{"row":101,"column":34},"action":"remove","lines":["a"]},{"start":{"row":101,"column":32},"end":{"row":101,"column":33},"action":"remove","lines":["r"]}],[{"start":{"row":101,"column":31},"end":{"row":101,"column":32},"action":"remove","lines":["T"],"id":111}],[{"start":{"row":101,"column":31},"end":{"row":101,"column":32},"action":"insert","lines":["B"],"id":112},{"start":{"row":101,"column":32},"end":{"row":101,"column":33},"action":"insert","lines":["u"]},{"start":{"row":101,"column":33},"end":{"row":101,"column":34},"action":"insert","lines":["y"]}],[{"start":{"row":101,"column":34},"end":{"row":101,"column":35},"action":"insert","lines":["T"],"id":113},{"start":{"row":101,"column":35},"end":{"row":101,"column":36},"action":"insert","lines":["r"]},{"start":{"row":101,"column":36},"end":{"row":101,"column":37},"action":"insert","lines":["a"]}],[{"start":{"row":101,"column":37},"end":{"row":101,"column":38},"action":"insert","lines":["v"],"id":114},{"start":{"row":101,"column":38},"end":{"row":101,"column":39},"action":"insert","lines":["e"]},{"start":{"row":101,"column":39},"end":{"row":101,"column":40},"action":"insert","lines":["l"]}],[{"start":{"row":101,"column":31},"end":{"row":101,"column":40},"action":"remove","lines":["BuyTravel"],"id":115},{"start":{"row":101,"column":31},"end":{"row":101,"column":49},"action":"insert","lines":["BuyTravelInsurance"]}],[{"start":{"row":104,"column":0},"end":{"row":105,"column":0},"action":"remove","lines":["",""],"id":116}],[{"start":{"row":84,"column":24},"end":{"row":84,"column":42},"action":"remove","lines":["BuyTravelInsurance"],"id":117},{"start":{"row":84,"column":24},"end":{"row":85,"column":0},"action":"insert","lines":["GetTravelInsuranceQuote",""]}],[{"start":{"row":84,"column":47},"end":{"row":85,"column":0},"action":"remove","lines":["",""],"id":119}],[{"start":{"row":85,"column":33},"end":{"row":85,"column":34},"action":"insert","lines":["Q"],"id":120},{"start":{"row":85,"column":34},"end":{"row":85,"column":35},"action":"insert","lines":["u"]},{"start":{"row":85,"column":35},"end":{"row":85,"column":36},"action":"insert","lines":["o"]},{"start":{"row":85,"column":36},"end":{"row":85,"column":37},"action":"insert","lines":["t"]},{"start":{"row":85,"column":37},"end":{"row":85,"column":38},"action":"insert","lines":["e"]}],[{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"insert","lines":["Q"],"id":121},{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"insert","lines":["u"]},{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["i"]}],[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"remove","lines":["i"],"id":122}],[{"start":{"row":27,"column":9},"end":{"row":27,"column":29},"action":"remove","lines":["GetTravelInsuranceQu"],"id":123},{"start":{"row":27,"column":9},"end":{"row":27,"column":32},"action":"insert","lines":["GetTravelInsuranceQuote"]}],[{"start":{"row":87,"column":35},"end":{"row":87,"column":36},"action":"remove","lines":["r"],"id":124},{"start":{"row":87,"column":34},"end":{"row":87,"column":35},"action":"remove","lines":["a"]},{"start":{"row":87,"column":33},"end":{"row":87,"column":34},"action":"remove","lines":["C"]},{"start":{"row":87,"column":32},"end":{"row":87,"column":33},"action":"remove","lines":["k"]},{"start":{"row":87,"column":31},"end":{"row":87,"column":32},"action":"remove","lines":["o"]},{"start":{"row":87,"column":30},"end":{"row":87,"column":31},"action":"remove","lines":["o"]}],[{"start":{"row":87,"column":30},"end":{"row":87,"column":31},"action":"insert","lines":["u"],"id":125},{"start":{"row":87,"column":31},"end":{"row":87,"column":32},"action":"insert","lines":["y"]}],[{"start":{"row":87,"column":29},"end":{"row":87,"column":32},"action":"remove","lines":["Buy"],"id":126},{"start":{"row":87,"column":29},"end":{"row":87,"column":47},"action":"insert","lines":["BuyTravelInsurance"]}],[{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"remove","lines":["r"],"id":127},{"start":{"row":88,"column":20},"end":{"row":88,"column":21},"action":"remove","lines":["a"]},{"start":{"row":88,"column":19},"end":{"row":88,"column":20},"action":"remove","lines":["C"]},{"start":{"row":88,"column":18},"end":{"row":88,"column":19},"action":"remove","lines":["k"]},{"start":{"row":88,"column":17},"end":{"row":88,"column":18},"action":"remove","lines":["o"]},{"start":{"row":88,"column":16},"end":{"row":88,"column":17},"action":"remove","lines":["o"]},{"start":{"row":88,"column":15},"end":{"row":88,"column":16},"action":"remove","lines":["b"]}],[{"start":{"row":88,"column":15},"end":{"row":88,"column":16},"action":"insert","lines":["B"],"id":128},{"start":{"row":88,"column":16},"end":{"row":88,"column":17},"action":"insert","lines":["u"]},{"start":{"row":88,"column":17},"end":{"row":88,"column":18},"action":"insert","lines":["y"]}],[{"start":{"row":88,"column":15},"end":{"row":88,"column":18},"action":"remove","lines":["Buy"],"id":129},{"start":{"row":88,"column":15},"end":{"row":88,"column":33},"action":"insert","lines":["BuyTravelInsurance"]}],[{"start":{"row":87,"column":0},"end":{"row":87,"column":1},"action":"insert","lines":["/"],"id":130},{"start":{"row":87,"column":1},"end":{"row":87,"column":2},"action":"insert","lines":["*"]},{"start":{"row":87,"column":2},"end":{"row":87,"column":3},"action":"insert","lines":["*"]}],[{"start":{"row":90,"column":68},"end":{"row":90,"column":69},"action":"insert","lines":["*"],"id":131},{"start":{"row":90,"column":69},"end":{"row":90,"column":70},"action":"insert","lines":["*"]},{"start":{"row":90,"column":70},"end":{"row":90,"column":71},"action":"insert","lines":["/"]}],[{"start":{"row":90,"column":70},"end":{"row":90,"column":71},"action":"remove","lines":["/"],"id":132},{"start":{"row":90,"column":69},"end":{"row":90,"column":70},"action":"remove","lines":["*"]},{"start":{"row":90,"column":68},"end":{"row":90,"column":69},"action":"remove","lines":["*"]}],[{"start":{"row":89,"column":5},"end":{"row":89,"column":6},"action":"insert","lines":["*"],"id":133},{"start":{"row":89,"column":6},"end":{"row":89,"column":7},"action":"insert","lines":["*"]},{"start":{"row":89,"column":7},"end":{"row":89,"column":8},"action":"insert","lines":["/"]}],[{"start":{"row":87,"column":0},"end":{"row":87,"column":4},"action":"insert","lines":["    "],"id":134},{"start":{"row":88,"column":0},"end":{"row":88,"column":2},"action":"insert","lines":["  "]},{"start":{"row":88,"column":10},"end":{"row":88,"column":12},"action":"insert","lines":["  "]},{"start":{"row":89,"column":0},"end":{"row":89,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":72,"column":137},"end":{"row":72,"column":138},"action":"insert","lines":[";"],"id":135}],[{"start":{"row":73,"column":13},"end":{"row":74,"column":0},"action":"insert","lines":["",""],"id":136},{"start":{"row":74,"column":0},"end":{"row":74,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":74,"column":14},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":137},{"start":{"row":75,"column":0},"end":{"row":75,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":75,"column":86},"end":{"row":76,"column":0},"action":"insert","lines":["",""],"id":138},{"start":{"row":76,"column":0},"end":{"row":76,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":76,"column":13},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":139},{"start":{"row":77,"column":0},"end":{"row":77,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":76,"column":8},"end":{"row":76,"column":12},"action":"remove","lines":["    "],"id":140},{"start":{"row":77,"column":0},"end":{"row":77,"column":8},"action":"remove","lines":["        "]}],[{"start":{"row":73,"column":3},"end":{"row":74,"column":0},"action":"insert","lines":["",""],"id":141},{"start":{"row":74,"column":0},"end":{"row":74,"column":3},"action":"insert","lines":["   "]},{"start":{"row":74,"column":3},"end":{"row":75,"column":0},"action":"insert","lines":["",""]},{"start":{"row":75,"column":0},"end":{"row":75,"column":3},"action":"insert","lines":["   "]},{"start":{"row":75,"column":3},"end":{"row":76,"column":0},"action":"insert","lines":["",""]},{"start":{"row":76,"column":0},"end":{"row":76,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":73,"column":3},"end":{"row":83,"column":5},"action":"insert","lines":[" let response = {","        sessionAttributes: event.sessionAttributes,","        dialogAction: {","            type: \"Close\",","            fulfillmentState: \"Fulfilled\",","            message: {","                contentType: \"PlainText\",","                content: msg","            }","        }","    }"],"id":142}],[{"start":{"row":74,"column":32},"end":{"row":74,"column":33},"action":"remove","lines":["."],"id":143},{"start":{"row":74,"column":31},"end":{"row":74,"column":32},"action":"remove","lines":["t"]},{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"remove","lines":["n"]},{"start":{"row":74,"column":29},"end":{"row":74,"column":30},"action":"remove","lines":["e"]},{"start":{"row":74,"column":28},"end":{"row":74,"column":29},"action":"remove","lines":["v"]},{"start":{"row":74,"column":27},"end":{"row":74,"column":28},"action":"remove","lines":["e"]}],[{"start":{"row":84,"column":3},"end":{"row":84,"column":30},"action":"insert","lines":["  callback(null, response);"],"id":144}],[{"start":{"row":84,"column":18},"end":{"row":84,"column":19},"action":"remove","lines":[","],"id":145},{"start":{"row":84,"column":17},"end":{"row":84,"column":18},"action":"remove","lines":["l"]},{"start":{"row":84,"column":16},"end":{"row":84,"column":17},"action":"remove","lines":["l"]},{"start":{"row":84,"column":15},"end":{"row":84,"column":16},"action":"remove","lines":["u"]},{"start":{"row":84,"column":14},"end":{"row":84,"column":15},"action":"remove","lines":["n"]}],[{"start":{"row":84,"column":14},"end":{"row":84,"column":15},"action":"remove","lines":[" "],"id":146}],[{"start":{"row":86,"column":1},"end":{"row":90,"column":6},"action":"remove","lines":["   callback(","        close(","            sessionAttributes, 'Fulfilled', { contentType: 'PlainText', content: msg }","        )","    );"],"id":147}],[{"start":{"row":85,"column":0},"end":{"row":85,"column":1},"action":"remove","lines":[" "],"id":148},{"start":{"row":85,"column":0},"end":{"row":85,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":85,"column":0},"end":{"row":85,"column":1},"action":"remove","lines":[" "],"id":149},{"start":{"row":85,"column":0},"end":{"row":86,"column":1},"action":"remove","lines":[""," "]},{"start":{"row":85,"column":0},"end":{"row":86,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":84,"column":4},"end":{"row":84,"column":5},"action":"remove","lines":[" "],"id":150}],[{"start":{"row":89,"column":0},"end":{"row":102,"column":1},"action":"remove","lines":["function dispatch(intentRequest, callback) {","    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);","","    const intentName = intentRequest.currentIntent.name;","","    // Dispatch to your skill's intent handlers","    if (intentName === 'GetTravelInsuranceQuote') {","        return GetTravelInsuranceQuote(intentRequest, callback);","    }","    /**    else if (intentName === 'BuyTravelInsurance') {","            return BuyTravelInsurance(intentRequest, callback);","        }**/","    throw new Error(`Intent with name ${intentName} not supported`);","}"],"id":151}],[{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"remove","lines":["G"],"id":152}],[{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["g"],"id":153}],[{"start":{"row":27,"column":0},"end":{"row":85,"column":1},"action":"remove","lines":["function getTravelInsuranceQuote(intentRequest, callback) {","    const quote = Math.floor((Math.random() * 1000) + 1);","    const tripType = intentRequest.currentIntent.slots.GetTripType;","    const tripStartDate = intentRequest.currentIntent.slots.GetTripStartDate;","    const tripReturnDate = intentRequest.currentIntent.slots.GetTripReturnDate;","    const tripLocation = intentRequest.currentIntent.slots.GetTripLocation;","    const tripTraveller = intentRequest.currentIntent.slots.GetTripTaveller;","    const sessionAttributes = intentRequest.sessionAttributes;","","    /**","        // Load confirmation history and track the current reservation.","        const reservation = String(JSON.stringify({ ReservationType: 'Hotel', Location: location, RoomType: roomType, CheckInDate: checkInDate, Nights: nights }));","        sessionAttributes.currentReservation = reservation;","","        if (intentRequest.invocationSource === 'DialogCodeHook') {","            // Validate any slots which have been specified.  If any are invalid, re-elicit for their value","            const validationResult = validateHotel(intentRequest.currentIntent.slots);","            if (!validationResult.isValid) {","                const slots = intentRequest.currentIntent.slots;","                slots[`${validationResult.violatedSlot}`] = null;","                callback(elicitSlot(sessionAttributes, intentRequest.currentIntent.name,","                slots, validationResult.violatedSlot, validationResult.message));","                return;","            }","","            // Otherwise, let native DM rules determine how to elicit for slots and prompt for confirmation.  Pass price back in sessionAttributes once it can be calculated; otherwise clear any setting from sessionAttributes.","            if (location && checkInDate && nights != null && roomType) {","                // The price of the hotel has yet to be confirmed.","                const price = generateHotelPrice(location, nights, roomType);","                sessionAttributes.currentReservationPrice = price;","            } else {","                delete sessionAttributes.currentReservationPrice;","            }","            sessionAttributes.currentReservation = reservation;","            callback(delegate(sessionAttributes, intentRequest.currentIntent.slots));","            return;","        }","","        // Booking the hotel.  In a real application, this would likely involve a call to a backend service.","        console.log(`bookHotel under=${reservation}`);","","        delete sessionAttributes.currentReservationPrice;","        delete sessionAttributes.currentReservation;","        sessionAttributes.lastConfirmedReservation = reservation;","    **/","    var msg = \"The quote of your trip to \" + tripLocation + \" from \" + tripStartDate + \" to \" + tripReturnDate + \" is HKD \" + quote + \".\";","    let response = {","        sessionAttributes: sessionAttributes,","        dialogAction: {","            type: \"Close\",","            fulfillmentState: \"Fulfilled\",","            message: {","                contentType: \"PlainText\",","                content: msg","            }","        }","    }","    callback(response);","}"],"id":154}],[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":155},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["i"],"id":156},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["m"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["p"]},{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["o"]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["r"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":[" "],"id":157},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["d"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["i"]}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":9},"action":"remove","lines":["di"],"id":158},{"start":{"row":1,"column":7},"end":{"row":1,"column":15},"action":"insert","lines":["dispatch"]}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":[" "],"id":159},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["f"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["r"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["o"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["m"]}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":[" "],"id":160}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":23},"action":"insert","lines":["\"\""],"id":161}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["."],"id":162},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["/"]}],[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["d"],"id":163},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["i"]},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["s"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["p"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["a"]},{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["t"]},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["c"]}],[{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["h"],"id":164}],[{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":[";"],"id":165}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":6},"action":"remove","lines":["import"],"id":166},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["c"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["o"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["n"]},{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["s"]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":21},"action":"remove","lines":["from \""],"id":167},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":[" "]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["r"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":20},"action":"insert","lines":["()"],"id":168}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":20},"action":"remove","lines":["()"],"id":169},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"remove","lines":["e"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"remove","lines":["r"]}],[{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["r"],"id":170},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["e"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["q"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["u"]}],[{"start":{"row":1,"column":16},"end":{"row":1,"column":20},"action":"remove","lines":["requ"],"id":171},{"start":{"row":1,"column":16},"end":{"row":1,"column":27},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["d"],"id":172},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["i"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["p"],"id":173},{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["a"]},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["t"]},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["c"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["h"]}],[{"start":{"row":1,"column":46},"end":{"row":1,"column":47},"action":"remove","lines":[";"],"id":174},{"start":{"row":1,"column":45},"end":{"row":1,"column":46},"action":"remove","lines":["\""]},{"start":{"row":1,"column":44},"end":{"row":1,"column":45},"action":"remove","lines":["h"]},{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"remove","lines":["c"]},{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"remove","lines":["t"]},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"remove","lines":["a"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"remove","lines":["p"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"remove","lines":["s"]},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"remove","lines":["i"]},{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"remove","lines":["d"]},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"remove","lines":["/"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"remove","lines":["."]}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":[";"],"id":175}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":[" "],"id":176}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["="],"id":177}],[{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":[" "],"id":178}],[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["."],"id":179},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":134,"scrollleft":0,"selection":{"start":{"row":48,"column":17},"end":{"row":48,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":true},"firstLineState":{"row":6,"state":"doc-start","mode":"ace/mode/javascript"}},"timestamp":1538992197337,"hash":"4e4b427b42053a6280e8deaac75daf747168cd7a"}