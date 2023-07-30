const HardCodedBirthday = require('../data/hardcoded-birthday')

const BirthdayTuple = () => {

    const birthday = new Date(
        HardCodedBirthday.year,
        HardCodedBirthday.month,
        HardCodedBirthday.day
    );

    const now = new Date();

    console.log('now: ' + now);
    console.log('Date.now: ', Date.now());

    const birthdayAlreadyPassedThisYear = true;

    const birthdayThisYear = new Date();
    const birthdayThisYearMs = new Date();

    const birthdayNextYear = new Date(
        now.year,
        HardCodedBirthday.month,
        HardCodedBirthday.day
    );

    const birthdayNextYearMs = new Date(
        now.year + 1,
        HardCodedBirthday.month,
        HardCodedBirthday.day
    );

    let timeUntilBirthday = 0;

    // if (nowMs > birthdayThisYearMs) {
    //     timeUntilBirthday = nowMs > birthdayThisYearMs
    // } 

    // if (birthdayAlreadyPassedThisYear) {

    //     const nextYearBirthday
    // }
    // else {

    // }

    console.log('comparing month: ', birthdayThisYear.getMonth(), ' ', now.getMonth())
    console.log('comparing date: ', birthdayThisYear.getDate(), ' ', now.getDate())

    if (birthdayThisYear.getMonth() === now.getMonth() &&
        birthdayThisYear.getDate() === now.getDate()) {
        // return [true, 0]
        return true

    }

    // To calculate the time difference of two dates
    //  const Difference_In_Time = now.getTime() - birthday.getTime();

    // To calculate the no. of days between two dates
    //  const Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    return false



}

module.exports = BirthdayTuple