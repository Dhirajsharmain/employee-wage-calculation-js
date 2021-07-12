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
 * 
 * @param {*} empHrs 
 * @returns 
 */
function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalWorkingDays++;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArr.push(calDailyWage(empHrs))
}

let empWage = calDailyWage(totalEmpHrs);

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