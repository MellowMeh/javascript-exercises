const repeatString = function(text, number) {
    let result = "";
    if (number < 0) {
        result = "ERROR"
    }
    for (let i = 0; i < number; i++) { 
        result += text;
    }
    return result;    
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('odin', Math.floor(Math.random() * 1000));
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
