// code your solution here
function saturdayFun(activity) {
    if (typeof activity === "undefined") {
        activity = "This Saturday, I want to roller-skate!";
      }
    else {
        activity = 'This Saturday, I want to ' + activity + '!';
    }
    return activity;
}

function mondayWork(activity) {
    if (typeof activity === "undefined") {
        activity = "This Monday, I will go to the office.";
    }
    else {
        activity = 'This Monday, I will ' + activity + '.';
    }
    return activity;
}

function wrapAdjective(saying) {
    const innerFunction = function (visualFlair = "special.") {
      return `You are ${saying}${visualFlair}${saying}!`;
    };
    return innerFunction;
}

