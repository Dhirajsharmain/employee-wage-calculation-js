/**
 * ****************************************************************************
 * Purpose: The purpose of this program to calculate daily employee wage.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 10-07-2021
 * ****************************************************************************
 */

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 10;
const MAX_HRS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

/**
 * Function for getting employee working hours 
 * @param {*} empCheck : part time or full time 
 * @returns : working hours
 */
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

/**
 * Calculating daily wage 
 * @param {*} empHrs : workig hours 
 * @returns : wage for working hours
 */
function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalWorkingDays++;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, calDailyWage(empHrs));
}

console.log(empDailyWageMap);

let empWage = calDailyWage(totalEmpHrs);

/**
 *  UC 7A Calculate total wage using array forEach traversal or reduce method.
 */

let totEmpWage = 0;

/**
 * Calculating total wage for a month
 * @param {*} dailyWage 
 */
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);

console.log("UC7 - Total Days : " + totalWorkingDays + ", Total Hrs : " + totalEmpHrs + ", Emp Wage : " + empWage);

/**
 * calculating mployee wage with reduce methd
 * @param {*} totalWage 
 * @param {*} dailyWage 
 * @returns 
 */
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC7 - Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

/**
 * UC 7B Show The Day Along With Daily Wage Using Array Map Helper Function
 */

let dailyCntr = 0;

/**
 * Map function for mapping Day with Wage array
 * @param {*} dailyWage 
 * @returns 
 */
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map")
console.log(mapDayWithWageArr);

/**
 * UC 7C Show Days when full time wage of 160 were earned.
 */

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log(" Daily wage filter when fulltime wage earned\n");
console.log(fullDayWageArr);

/**
 * UC 7D Find the first occurence when full time wage was earned using find function
 */

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("\nFirst time full time wage was earned on Day : " + mapDayWithWageArr.find(findFullTimeWage));

/**
 * UC 7E chack if Every element of full time wage is truely holding full time wage
 */

console.log("Check All Element have Full Time Wage : " + fullDayWageArr.every(findFullTimeWage));

/***
 * UC 7G Find the number of days the employee worked.
 */

function totalDaysWorked(numofDays, dailyWage) {
    if (dailyWage > 0) return numofDays + 1;
    return numofDays;
}

console.log("\nNumber of days employee worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

/***
 * UC 9 
 * a. Calc total Wage and total hours worked
 * b. Show the full workings days, part working days and no working days
 */

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("UC9A - Emp Wage with Arrow : " + "Total Hours: " + totalHours + ", Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new  Array();

empDailyHrsMap.forEach( (value, key) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
})

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);