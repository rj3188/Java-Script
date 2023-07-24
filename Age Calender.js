function lifeInWeeks(age) {
    
    //age is 12;

    var yearRemaining = 90 - age;
    var days = yearRemaining * 365;
    var weeks = yearRemaining * 52;
    var months = yearRemaining * 12;
    
    console.log("Year Calender in " + days +" Days, " + weeks +" Weeks, " + months +" Months left. ");
    
}

lifeInWeeks(12);