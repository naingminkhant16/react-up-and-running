const initialValue = 0;

const myArray = [1, 2, 3, 4, 5];

const result = myArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(result);