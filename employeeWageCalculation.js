/**
 * ****************************************************************************
 * Purpose: The purpose of this program to calculate daily employee wage.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 10-07-2021
 * ****************************************************************************
 */

const IS_ABSENT = 0

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
} else {

    console.log("Employee is PRESENT");

}