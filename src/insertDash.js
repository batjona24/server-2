async function insertDashBetweenEven(string) {
    const string_array = string.split('');
    const numbers_array = string_array.map(function check(element) {
        if(Number(element)) {
            return Number(element);
        }
        else return element;
    }); 
    for(let i = 0; i < numbers_array.length; i++) {
        if(numbers_array[i - 1] % 2 === 0 && numbers_array[i] % 2 === 0) {
            numbers_array.splice(i, 0, '-');
        }
    }
    return numbers_array.join('');
}
export default insertDashBetweenEven;