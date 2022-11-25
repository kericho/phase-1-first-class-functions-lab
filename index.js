// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return [...drivers].slice(0, 2)
};
const returnLastTwoDrivers = (drivers) => {
    return [...drivers].slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (myValue) =>{
    return (fare) =>{
        return myValue * fare ;
    };
};

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, driversToReturn) =>{
    return driversToReturn (arrayOfDrivers)
}