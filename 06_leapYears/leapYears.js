const leapYears = function(year) {
    let result = false;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        result = true;
    }
    return result;
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);


// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)


// Do not edit below this line
module.exports = leapYears;
