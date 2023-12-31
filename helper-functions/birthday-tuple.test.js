
// jest.spyOn(Date, 'now').mockImplementation(() => {
//     return (new Date('2011-01-02')).getTime()
// })

const fakeTimestamp = 1627673696000; 

Date.now = jest.fn(() => fakeTimestamp);

const BirthdayTuple = require('./birthday-tuple')
const HardCodedBirthday = require('../data/hardcoded-birthday')

describe('BirthdayTuple', () => {

    // afterEach(() => {
    //     jest.useRealTimers()
    // })

    it('handles birthday', () => {

        // jest
        //     .useFakeTimers()
        //     .setSystemTime(
        //         new Date(
        //             HardCodedBirthday.year,
        //             HardCodedBirthday.month,
        //             HardCodedBirthday.day
        //         )
        //             .getTime()
        //     );


      

        const isBirthday = BirthdayTuple();

        expect(isBirthday).toEqual(true);
        // expect(daysUntilBirthday).toEqual(0);


        // Call the function being tested
        // const result = someFunction();

        // Assert the result based on the fixed timestamp
        // expect(result).toBe(fixedTimestamp);

        // expect(dateNowSpy).toHaveBeenCalled()

        // Clean up the mock after the test
        // dateNowSpy.mockRestore();

    })


    it('handles day after birthday', () => {

        // const dateNowSpy = jest.spyOn(Date, 'getTime')
        //     .mockImplementationOnce(() => new Date(
        //         HardCodedBirthday.year,
        //         HardCodedBirthday.month,
        //         HardCodedBirthday.day + 1
        //     ));

        jest.useFakeTimers()
        jest.setSystemTime(
            new Date(
                // HardCodedBirthday.year,
                // HardCodedBirthday.month + 1,
                // HardCodedBirthday.day + 1 + 1

                '2011-02-03'
            )
                .getTime()
        );


        const isBirthday = BirthdayTuple();

        expect(isBirthday).toBe(true);

        // const [isBirthday, daysUntilBirthday] = BirthdayTuple();

        // expect(isBirthday).toBeFalsy();
        // expect(daysUntilBirthday).toEqual(1);

    })

})