const _ = {
    clamp(num, lowbnd, upbnd){      
        if (num > upbnd) {
            num = upbnd;
        } else if (num < lowbnd) {
            num = lowbnd;
        }
        return num;
    },
    inRange(num, initVal, endVal) {
        if (endVal === undefined) {
            endVal = initVal;
            initVal = 0;
        }
        if (initVal > endVal) {
            let temp;
            temp = endVal;
            endVal = initVal;
            initVal = temp;
        }
        isInRange = (initVal <= num) && (num < endVal);
        return isInRange;
    },
    words(string) {
        let words;
        words = string.split(' ');
        return words;
    },
    pad(string, length) {
        if (length < string.length) {
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length)/2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString; 
    },
    has(object, key) {
        let hasValue = object[key];
        if (hasValue != undefined) {
            return true;
        } else {
            return false;
        }
    },
    invert(object) {
        let invertedObject = {};
        for ( let key in object) {
            const originalValue = object[key];
            invertedObject = {originalValue : key};
        }
        return invertedObject;
    },
    findKey(object, predFunction) {
        for (let key in object) {
            let temp = predFunction(object[key]);
            if (temp != false) {
                return key;
            } 
        }
        return undefined;
    },
    drop(array, n) {
        let newArr = [];
        if (n === undefined) {
            n = 1;
        }
        for (let i=0; i < (array.length); i++) {
            if (i >= n) {
                newArr.push(array[i]); 
            }
        }
        return newArr;
    },
    dropWhile(arr, predFunction) {
        let newArr = [];
        let falsyEncountered = false;
        for (i = 0; i < arr.length; i++) {
            if (predFunction(arr[i], i, arr) === false) {
                falsyEncountered = true; 
            }
            if (falsyEncountered) {
                newArr.push(arr[i]);
            } 
        }
        return newArr;
    },
    chunk(arr, size) {
        let newArr = [];
        let minArr = [];
        for (let i = 0; i < arr.length; i++) {
            minArr = [];
            let j = 0;
            for (j = 0; (j < size) && ((j + i) < arr.length); j++) {
                minArr[j] = arr[i + j];
            }
            i = i + j - 1; 
            newArr.push(minArr);
        }

        return newArr;
    }

};

// clamp for debugging reasons 
console.log('Testing clamp function: ' + _.clamp(7,2,4));

// inRange for debugging reasons
console.log('Testing inRange function: ' + _.inRange(4,6,8));

// words for debugging reasons
console.log('Testing words function: ' + _.words('La vaca está loca'));

// pad for debugging reasons
console.log('Testing pad function: (' + _.pad('Hi', 8) + ')');

// has for debugging reasons
//console.log('Testing has function: ' + _.has());

// drop for debugging reasons
//console.log('Testing drop function: ' + _.drop(['a','b','c','d','e','f','g','h','i','j','k','l','m'], 2));

// Do not write or modify code below this line.
module.exports = _;