1. Write a function that uses a switch statement to determine the day of the week based on a number(1 - 7).

function getDayOfWeek(number) {
    let day;

    switch (number) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid number. Please enter a number from 1 to 7.";
    }

    return day;
}

// Example usage:
console.log(getDayOfWeek(3)); // Output: Wednesday
console.log(getDayOfWeek(8)); // Output: Invalid number...
