// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Companies info
const cardCompany = {
    isACompany: true,
    compromised: false,
};

// Amex
const Amex = Object.create(cardCompany);
Amex.firstDigit = 3;

// Visa
const Visa = Object.create(cardCompany);
Visa.firstDigit = 4;

// Mastercard
const Mastercard = Object.create(cardCompany);
Mastercard.firstDigit = 5;

// Discover
const Discover = Object.create(cardCompany);
Discover.firstDigit = 6;

// Array of Credit Cards Companies
const creditCardsInfoArr = [Amex, Visa, Mastercard, Discover];

// Add your functions below:

//Luhn algorithm aplied for arrays
const validateCred = (arr) => {
    let newArr = [];
    let checkDigit = arr[arr.length - 1];
    let oddNum = false;
    newArr[arr.length - 1] = checkDigit;

    // iteration for Luhn algorithm
    for (let i = (arr.length - 2); i >= 0; i--) {
        if (oddNum) {
            newArr[i] = arr[i];
        } else {
            newArr[i] = arr[i] * 2;
            if (newArr[i] >= 10) {
                newArr[i] = newArr[i] - 9;
            }  
        };
        oddNum = !oddNum;
    };
    // sum for Luhn algorithm
    let sum = newArr.reduce((partialSum, iSum) => partialSum + iSum, 0);
    let sumMod = sum % 10;

    //checks if the value is valid or invalid
    if (sumMod % 10 === 0) {return true} else {return false};
}
// Test valideteCred() check
//console.log(validateCred(valid4));

//Invalid cards:
findInvalidCards = (arr) => {
    let newArr = [];
    for (let card of arr) {
        //console.log('New card: ' + card);
        if (!(validateCred(card))) {
            newArr.push(card);
        }
    }
    /*for (let card of newArr) {
        console.log('Invalid card: ' + card);
    }*/
    return newArr;
};
findInvalidCards(batch);

// Search of the Companies that own the invalid cards
idInvalidCardCompanies = (arr) => {
    newArr = [];
    
    for (let card of arr) {
        switch (true) {
            case Amex.firstDigit === card[0]:
                if (!Amex.compromised) {
                    newArr.push('Amex');
                    Amex.compromised = true;
                }
                break;
            case Visa.firstDigit === card[0]:
                if (!Visa.compromised) {
                    newArr.push('Visa');
                    Visa.compromised = true;
                }
                break;
            case Mastercard.firstDigit === card[0]:
                if (!Mastercard.compromised) {
                    newArr.push('Mastercard');
                    Mastercard.compromised = true;
                }
                break;
            case Discover.firstDigit === card[0]:
                if (!Discover.compromised) {
                    newArr.push('Discover');
                    Discover.compromised = true;
                }
                break;
            default:
                console.log('Company not found: ' + card);
        }
        console.log('Invalida: ' + card);
    }
    console.log(newArr);
    return newArr;
}
idInvalidCardCompanies(findInvalidCards(batch));




