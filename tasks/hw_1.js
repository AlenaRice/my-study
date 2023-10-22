/*1. Flat array
[1,2, [3,4, [5,6], 7,[8]], 9] -> [1,2,3,4,5,6,7,8,9] */

let arr = [1,2, [3,4, [5,6], 7,[8]], 9];

function flattenArray(arr) {
    let count = 0;
    countArr (arr);
    function countArr (arr) {
        for (let elem of arr) {
            if (Array.isArray(elem)) {
                count++;
                countArr(elem)
            }
        }
    }
    return arr.flat(count);
}

flattenArray(arr);



/* 2. Get string info
// dog, dgo -> true
// dog, dfo -> false
// doog, dogg -> false
// ddoo, dood -> true */

function getStrInfo (str1, str2) {
    let arr1 = str1.split('').sort().join('');
    let arr2 = str2.split('').sort().join('');
    if (arr1 == arr2) {
        return true;
    } else {
        return false
    }

}

getStrInfo ('dog', 'dgo');
getStrInfo ('dog', 'dfo');
getStrInfo ('doog', 'dogg');
getStrInfo ('ddoo', 'dood');
